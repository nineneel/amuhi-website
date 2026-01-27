import type { NewsArticle } from '../types/news';

export const newsArticles: NewsArticle[] = [
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
      name: 'AMUHI Team',
      // role: 'Director of Communications',
      // avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDXswkBzpamGz0ltXrTwFi_MI0U4s3igfXap0sHt_UVm1h-z_1hE88pIFsnYw9b4KrvzPrE5bFrTTFXroh51tolxo3-9W8faq_eAzPBuh8xuZ_ohznhezkE2mdI20BJKoqXacIcU_en7Lexc8HXj2kc7Yj0sXSKC5q5VJxnUWrwoOUlM9om9JtSJmiUu6Um3Y3psqIJSp2DKBbHwwXmxMWwBsE3I6JK2-CDkfQwz61ObtjCBWt3e69wIjp6i45CSCzQNQI7Cg6vLpQ',
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
