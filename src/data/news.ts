import type { NewsArticle } from '../types/news';

export const newsArticles: NewsArticle[] = [
  {
    id: 'news-visa-2024',
    slug: 'visa-regulations-2024',
    title: 'New Visa Regulations for 2024 Umrah Season Announced',
    summary: 'The Ministry of Hajj and Umrah has released updated guidelines for international pilgrims, aiming to streamline the visa application process and improve the overall journey experience.',
    category: 'Regulation',
    tags: ['Visa', 'Compliance', 'Pilgrim Experience'],
    coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAFXWAvdPlyJesEACbpsiVlG2wyEhoHddmVeyG4msGlmSRPeXTk5g3aAk0_4YAy6WcEnfyosNDX-KUlBrb7h9MGaLNsaYwbabQS7W_cdsR8uVJJRrJ_8FARgP-VA_l6NPEBiDiuKMywXS6NeNu0aY2yP7iwKIAXS4C7heubPPOuu3z91V_jcrZLzIpczWJPcxkjK-LZgpZ-YpHGglcshLW5TEwdanqYvbqzc8CexXlXQpzF04gNlfiEcxmrLLUDVFzCERaYUsRXCmk',
    publishedAt: '2023-10-24T02:00:00Z',
    readTimeMinutes: 6,
    featured: true,
    trending: true,
    author: { name: 'Editorial Team' },
    relatedSlugs: ['health-safety-protocols-2023', 'flight-quotas-southeast-asia', 'strategic-alliance-2024'],
  },
  {
    id: 'news-app-50k',
    slug: 'amuhi-digital-app-50k',
    title: 'AMUHI Digital App Hits 50k Downloads',
    summary: 'The AMUHI Digital super-app reaches a major milestone, accelerating digital adoption among travel partners.',
    category: 'Technology',
    tags: ['Product', 'Mobile', 'Milestone'],
    coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCy9NlMMrYYAhbfUnMhK9_zGnN1RgYIe5zAc4LE_9IvgRA9n5oeVvx-bL5wrOwV0PvKCJpdu3TWBhxYI7Javz3638EXzzIZfpvPoINdqXW3XZxzougyaf5UBgXFvpibe3yPBeo6Xcg3PVqElGBvxXw5k9WVPhr8z6mjcssw5iILgx1xb7d-TMk_Rydk7FI8kt4zX6HlkNs1fe5yzvAwszb2FgEJ8_azlP8pCFbaluZj-CFIP6HsQJ1EZYHzcaz3nYYpIH9TeTZN0dM',
    publishedAt: '2023-10-24T00:00:00Z',
    readTimeMinutes: 3,
    trending: true,
    relatedSlugs: ['amuhi-forum-recap-2023', 'visa-regulations-2024'],
  },
  {
    id: 'news-forum-2023',
    slug: 'amuhi-forum-recap-2023',
    title: 'Recap: International Umrah Hajj Forum 2023',
    summary: 'Highlights from the biggest gathering of industry leaders in Southeast Asia with a focus on tech and innovation.',
    category: 'Events',
    tags: ['Forum', 'Networking', 'Recap'],
    coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC6Eu9ZSflquqGmlIp-VdRonEItNKj83_AxyA0PyTO2bDeqUBEUB8YEhPS1bIUVK1ewp-8WhlecxE5Urxo_wM7mvCh9VvNvAbZ2_kvxYQo9KmfdDsl5fG1TMeLtHtoW8R9H8LtEyMCZKq-6SxZeizzzj4JVBDOW1SAPAbu7xGIPszk9Ni1MWz-MPDtyRcY3MmWuR__BlCyX0_sG5ZCqCS3HBvm8T9L-n6UibmQdq38Cwp9V1xrLcExHVx1Jr5XwVgfReO9A_B67yYQ',
    publishedAt: '2023-10-20T00:00:00Z',
    readTimeMinutes: 4,
    trending: true,
    relatedSlugs: ['amuhi-digital-app-50k', 'annual-summit-early-bird'],
  },
  {
    id: 'news-flight-quotas',
    slug: 'flight-quotas-southeast-asia',
    title: 'Flight Quotas Increased for Southeast Asia',
    summary: 'Government regulators confirm expanded flight quotas to accommodate rising regional demand.',
    category: 'Regulation',
    tags: ['Aviation', 'Quota', 'Market'],
    coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuATDad6mi36ulNORdG7-rYiOMME7zt2ZhNn3FmgbhPTVnk15Qkx_pfO2WDsxor8T-Zez24GxZuVEOcLw9jWGIN1Tpi1ngR3dlShKf6nwjr8EFZhXMi2vXGNbMoPfZHYx6e_iZrC6T5NuP70KlbsmLCPHIMPoTAXeI_VpZsG63MXv3oll5ct5FoGGSGBRwm3usV8fh7pO-Uh40PdTajC7nD8qqT3Um3KvwDZU1NrBrOkPsvnANU0F3p-6yoNjOBJMIKvGziHS8GtKQk',
    publishedAt: '2023-10-18T00:00:00Z',
    readTimeMinutes: 3,
    trending: true,
    relatedSlugs: ['visa-regulations-2024', 'health-safety-protocols-2023'],
  },
  {
    id: 'news-academy-certification',
    slug: 'academy-certification-program',
    title: 'AMUHI Academy Launches New Certification Program for Agents',
    summary: 'Curriculum focuses on digital transformation and crisis management to equip agents with modern tools.',
    category: 'Education',
    tags: ['Academy', 'Certification', 'Training'],
    coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDXswkBzpamGz0ltXrTwFi_MI0U4s3igfXap0sHt_UVm1h-z_1hE88pIFsnYw9b4KrvzPrE5bFrTTFXroh51tolxo3-9W8faq_eAzPBuh8xuZ_ohznhezkE2mdI20BJKoqXacIcU_en7Lexc8HXj2kc7Yj0sXSKC5q5VJxnUWrwoOUlM9om9JtSJmiUu6Um3Y3psqIJSp2DKBbHwwXmxMWwBsE3I6JK2-CDkfQwz61ObtjCBWt3e69wIjp6i45CSCzQNQI7Cg6vLpQ',
    publishedAt: '2023-10-15T00:00:00Z',
    readTimeMinutes: 5,
    relatedSlugs: ['strategic-alliance-2024', 'travel-tech-alliance'],
  },
  {
    id: 'news-tech-alliance',
    slug: 'travel-tech-alliance',
    title: 'Strategic Alliance Formed with Leading Travel Tech Provider',
    summary: 'Collaboration brings seamless booking experiences through an integrated platform for all AMUHI members.',
    category: 'Partnership',
    tags: ['Partnership', 'Technology', 'Platform'],
    coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAC8OjiZD3NRFwr5Tc7_a4c27_qXcVghOGmoPkLasdf7JgzNu9_0JL1pNHN4uCc_W4wpuvWey-RAyt6H-D-KB4zB6brX77FFmtLVm-qqsWAqJnSdNqkqtogoONRvxVifm90nLLCjRpW98tvNeo0zyOqzC96PD0wSZb6H4Ynrlgw0snGluvTR5oWqC054v9kqbQvYtTzqNi3CUBP9LYPUWjaIzJXx9t0VRYE3QzvL6l65yX3aDJ5wHcp5ArOb1Owg8IH65OFbyRRFFc',
    publishedAt: '2023-10-12T00:00:00Z',
    readTimeMinutes: 3,
    relatedSlugs: ['strategic-alliance-2024', 'amuhi-digital-app-50k'],
  },
  {
    id: 'news-community-spotlight',
    slug: 'community-spotlight-10000-pilgrims',
    title: 'Community Spotlight: Serving 10,000 Pilgrims with Excellence',
    summary: 'An interview with a top-rated agency on managing logistics and spiritual guidance simultaneously.',
    category: 'Community',
    tags: ['Community', 'Operations', 'Customer Story'],
    coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-4ZBrnM6z5IPlmmMgtVcytODtan4uCav9u1bq8m9i6x0lpkLLMhU_kIM6wrNZvJmQ4mk3O30e5XbowPpzZqgpN1HiBG4h6UHzWIqJdkSZ-2WU8cKGfDtOHrXQLJfnqNlAx2LWDlrcogfwEIFt4srJG2EJIK9UiGM0HuuNwRe6PCA6ss26gZswE77i-YtWB9h625Y6IQpuKqM17skjE1oLwndlpO9ZfZKw41kC-4fUaSg6ROA0K7UYaKO462m59cHUrdWTsSW3mwU',
    publishedAt: '2023-10-10T00:00:00Z',
    readTimeMinutes: 4,
    relatedSlugs: ['amuhi-forum-recap-2023', 'health-safety-protocols-2023'],
  },
  {
    id: 'news-future-digital',
    slug: 'future-of-hajj-digital-mapping',
    title: 'The Future of Hajj: Digital Mapping and AI Assistance',
    summary: 'Emerging technologies are reshaping the pilgrimage experience, making it safer and more accessible.',
    category: 'Innovation',
    tags: ['Innovation', 'AI', 'Safety'],
    coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAWf651VVbBgK7_38-dATclCnYxzlcgz6cGf3ao8lPaiDoJc9Bf81Olu_qQoZssYE0mfHPIBmrgGOIvZ1dyqn8YMwpbxjVoM19Wz04Uc4nU-ZBlU0bEmuafnP1Jc9LoPjtVSdTT2uYhwn6m1L4-YnCzcJfYkI-t6lRNTcYj5Z8p79zF4s-DXzvSxaXfKXsyneP1kOhU6gYoKXhkgLk5YeD55veYpkm3Nuy92Nw1UhycHEVqoeVLB1LlH5f-kB3Ds11RcK2sArIczmY',
    publishedAt: '2023-10-08T00:00:00Z',
    readTimeMinutes: 6,
    relatedSlugs: ['travel-tech-alliance', 'community-spotlight-10000-pilgrims'],
  },
  {
    id: 'news-health-safety',
    slug: 'health-safety-protocols-2023',
    title: 'Update on Health & Safety Protocols for Incoming Groups',
    summary: 'Essential information for agency owners regarding the new health requirements issued by local authorities.',
    category: 'Regulatory',
    tags: ['Health', 'Safety', 'Compliance'],
    coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAqWJOSVcBc9NohjfIzeSaZKgN236ozhRQh4uJEZv47ETHZr_hFQ7Wh5andEiS5EBbXBfi_yTiKBeblrwCQdnRlsozVZmwoqlxvmhlgFGm05En3liMZ_T3lDRTI8sJ16UwY8qaI6DRnKbMm_iWfNa4txQanTgZhW3betyzhfRia-GkHt48B47jhXvC29AyvJOSr8AuCzn6LK8iJlQuYqnD9zuQXp26RlvxkRSO6-KEAvMjXrIexdnZr2ZxgEeViIf1eRSX8oPIYpo8',
    publishedAt: '2023-10-05T00:00:00Z',
    readTimeMinutes: 3,
    relatedSlugs: ['visa-regulations-2024', 'flight-quotas-southeast-asia'],
  },
  {
    id: 'news-annual-summit',
    slug: 'annual-summit-early-bird',
    title: 'Early Bird Registration Open for Annual Summit',
    summary: 'Network with over 500 industry leaders at the upcoming summit in Jakarta.',
    category: 'Events',
    tags: ['Summit', 'Registration', 'Networking'],
    coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDxeewkrVnwX6vMGaelz8VvMmyOCo6OkaaoWMRY-ZPx33UNmJFMB--mqta-uVxttHUShE560PqVuqZxW8rA4yMUCLmkrku1kskfYKBk-yeVzoOLFljDebOIJViguaTYw3__oDefvh4Gbp9whPXCRxgf9ag3ZGCKvwzhQ0LBOVkNowFeX4IQGzKhlYuPrOQhGEe5GUqpakZmPYzDIfAAD0qMfOY2C5w57DhgFOl-XhMDoJDRzV7SLb5gUeDe5RmrKzhv2CBUpSLWROA',
    publishedAt: '2023-10-01T00:00:00Z',
    readTimeMinutes: 2,
    relatedSlugs: ['amuhi-forum-recap-2023', 'amuhi-digital-app-50k'],
  },
  {
    id: 'news-strategic-alliance',
    slug: 'strategic-alliance-2024',
    title: 'AMUHI Forges Strategic Alliance with Ministry of Hajj & Umrah for 2024 Season',
    summary: 'A new agreement streamlines operations for over 500 travel agencies across Indonesia with a unified digital system.',
    category: 'Official Announcement',
    tags: ['Partnership', 'Regulation', 'Digital'],
    badge: 'Official Announcement',
    coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAFXWAvdPlyJesEACbpsiVlG2wyEhoHddmVeyG4msGlmSRPeXTk5g3aAk0_4YAy6WcEnfyosNDX-KUlBrb7h9MGaLNsaYwbabQS7W_cdsR8uVJJRrJ_8FARgP-VA_l6NPEBiDiuKMywXS6NeNu0aY2yP7iwKIAXS4C7heubPPOuu3z91V_jcrZLzIpczWJPcxkjK-LZgpZ-YpHGglcshLW5TEwdanqYvbqzc8CexXlXQpzF04gNlfiEcxmrLLUDVFzCERaYUsRXCmk',
    publishedAt: '2023-10-24T00:00:00Z',
    readTimeMinutes: 5,
    author: {
      name: 'Dr. Ahmed Al-Fayed',
      role: 'Director of Communications',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDXswkBzpamGz0ltXrTwFi_MI0U4s3igfXap0sHt_UVm1h-z_1hE88pIFsnYw9b4KrvzPrE5bFrTTFXroh51tolxo3-9W8faq_eAzPBuh8xuZ_ohznhezkE2mdI20BJKoqXacIcU_en7Lexc8HXj2kc7Yj0sXSKC5q5VJxnUWrwoOUlM9om9JtSJmiUu6Um3Y3psqIJSp2DKBbHwwXmxMWwBsE3I6JK2-CDkfQwz61ObtjCBWt3e69wIjp6i45CSCzQNQI7Cg6vLpQ',
    },
    content: [
      {
        type: 'paragraph',
        text: 'In a landmark move designed to streamline operations for over 500 travel agencies across Indonesia, AMUHI has officially entered into a strategic partnership with regulatory bodies to enhance the pilgrim experience.',
      },
      {
        type: 'paragraph',
        text: 'With the resumption of full-quota pilgrimages, the need for a cohesive, transparent, and digitally integrated system has never been more critical. AMUHI is at the forefront of this digital transformation.',
      },
      {
        type: 'heading',
        text: 'Key Objectives of the Partnership',
      },
      {
        type: 'paragraph',
        text: 'The collaboration focuses on three primary pillars that directly impact the operational efficiency of member agencies and the safety of pilgrims:',
      },
      {
        type: 'list',
        items: [
          'Digital Integration: Unifying visa processing systems with the AMUHI App.',
          'Standardized Training: Mandatory certification for tour leaders through AMUHI Academy.',
          'Crisis Management: A direct hotline for emergency support in Makkah and Madinah.',
        ],
      },
      {
        type: 'quote',
        text: '"This is not just an agreement on paper; it is a commitment to the millions of pilgrims who trust our members with their spiritual journey."',
        cite: 'Mochamad Irfan Yusuf, Minister of Hajj & Umrah RI',
      },
      {
        type: 'paragraph',
        text: 'All AMUHI members will gain early access to the new quota allocation system starting next month, reducing wait times and providing more certainty for planning itineraries.',
      },
      {
        type: 'heading',
        text: 'What This Means for Members',
      },
      {
        type: 'paragraph',
        text: 'Existing members need not take immediate action; the integration will roll out automatically across the AMUHI dashboard. New applicants will go through a more rigorous vetting process to meet the elevated standards from this alliance.',
      },
      {
        type: 'cta',
        title: 'Not a member yet?',
        description: 'Join the fastest-growing network of Hajj & Umrah professionals and future-proof your agency.',
        ctaText: 'Apply for Membership',
        href: '#',
      },
      {
        type: 'paragraph',
        text: 'We invite all stakeholders to join our town hall next Friday, where we will demonstrate the new system capabilities and answer questions from the community.',
      },
    ],
    relatedSlugs: ['travel-tech-alliance', 'visa-regulations-2024', 'amuhi-forum-recap-2023'],
  },
];

export function getNewsArticleBySlug(slug: string) {
  return newsArticles.find((article) => article.slug === slug);
}

export function getRelatedArticles(current: NewsArticle, limit = 3) {
  const tagSet = new Set(current.tags);

  const candidates = newsArticles.filter(
    (article) =>
      article.slug !== current.slug &&
      (current.relatedSlugs?.includes(article.slug) ||
        article.category === current.category ||
        article.tags.some((tag) => tagSet.has(tag))),
  );

  return candidates.slice(0, limit);
}
