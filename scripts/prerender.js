import puppeteer from 'puppeteer'
import { preview } from 'vite'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
import { writeFileSync, mkdirSync, existsSync } from 'fs'

const __dirname = dirname(fileURLToPath(import.meta.url))
const rootDir = resolve(__dirname, '..')
const distDir = resolve(rootDir, 'dist')

// All routes to pre-render
const programSlugs = ['academy', 'check', 'protect', 'care', 'network', 'digital']
const newsSlugs = [
  'visa-regulations-2024',
  'amuhi-digital-app-50k',
  'amuhi-forum-recap-2023',
  'flight-quotas-southeast-asia',
  'academy-certification-program',
  'travel-tech-alliance',
  'community-spotlight-10000-pilgrims',
  'future-of-hajj-digital-mapping',
  'health-safety-protocols-2023',
  'annual-summit-early-bird',
  'strategic-alliance-2024',
]

const routes = [
  '/',
  '/about',
  '/news',
  ...programSlugs.map((slug) => `/programs/${slug}`),
  ...newsSlugs.map((slug) => `/news/${slug}`),
]

async function prerender() {
  console.log('Starting prerender...')
  console.log(`Routes to prerender: ${routes.length}`)

  // Start a preview server for the built dist
  const server = await preview({
    root: rootDir,
    preview: {
      port: 4173,
      strictPort: true,
    },
  })

  const port = 4173
  console.log(`Preview server running at http://localhost:${port}`)

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  })
  const page = await browser.newPage()

  for (const route of routes) {
    console.log(`Prerendering: ${route}`)

    try {
      await page.goto(`http://localhost:${port}${route}`, {
        waitUntil: 'networkidle0',
        timeout: 30000,
      })

      // Wait for React to render
      await page.waitForSelector('#root', { timeout: 10000 })

      // Wait a bit more for async content
      await new Promise((r) => setTimeout(r, 500))

      const html = await page.content()

      // Determine file path
      const filePath = route === '/'
        ? resolve(distDir, 'index.html')
        : resolve(distDir, route.slice(1), 'index.html')

      // Create directory if needed
      const dir = dirname(filePath)
      if (!existsSync(dir)) {
        mkdirSync(dir, { recursive: true })
      }

      writeFileSync(filePath, html)
      console.log(`  Saved: ${filePath}`)
    } catch (error) {
      console.error(`  Error prerendering ${route}:`, error.message)
    }
  }

  await browser.close()
  server.httpServer.close()
  console.log('Prerender complete!')
}

prerender().catch(console.error)
