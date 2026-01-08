import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import ScrollToTop from './components/common/ScrollToTop'
import HomePage from './pages/Home'
import DetailProgram from './pages/DetailProgram'
import NewsPage from './pages/News'
import NewsDetail from './pages/NewsDetail'
import AboutPage from './pages/About'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/news/:slug" element={<NewsDetail />} />
          <Route path="/programs/:slug" element={<DetailProgram />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
