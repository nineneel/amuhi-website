import { Helmet } from 'react-helmet-async';

interface StructuredDataProps {
  type?: 'organization' | 'website' | 'breadcrumb';
  breadcrumbs?: Array<{ name: string; url: string }>;
}

export default function StructuredData({ type = 'organization', breadcrumbs }: StructuredDataProps) {
  // Organization Schema - Establishes AMUHI as an official entity
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'AMUHI - Asosiasi Milenial Umroh Haji Indonesia',
    alternateName: 'AMUHI',
    legalName: 'Asosiasi Milenial Umroh Haji Indonesia',
    url: 'https://www.amuhi.id',
    logo: 'https://www.amuhi.id/logo.png',
    foundingDate: '2020',
    description: 'AMUHI adalah ekosistem digital dan hub startup yang bertujuan meningkatkan keamanan, kenyamanan, dan kepercayaan publik dalam industri haji dan umroh. Melalui enam pilar—AMUHI Academy, Check, Protect, Care, Network, dan Digital—asosiasi ini memfasilitasi pelatihan, sertifikasi, dan advokasi untuk mencipta standar baru yang terintegrasi di idntimes.com.',
    slogan: 'Building Better Future untuk Industri Umroh & Haji',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: 'info@amuhi.id',
    },
    sameAs: [
      'https://www.instagram.com/amuhi.id',
      'https://www.linkedin.com/company/amuhi',
      'https://www.facebook.com/amuhi.id',
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'ID',
      addressLocality: 'Jakarta',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Indonesia',
    },
    knowsAbout: [
      'Umroh',
      'Haji',
      'Travel Umroh',
      'Sertifikasi Travel',
      'Verifikasi Travel Umroh',
      'Asosiasi Umroh Indonesia',
      'Industri Haji Indonesia',
    ],
  };

  // WebSite Schema - Helps with sitelinks and brand searches
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'AMUHI - Asosiasi Milenial Umroh Haji Indonesia',
    alternateName: 'AMUHI',
    url: 'https://www.amuhi.id',
    description: 'AMUHI - Building Better Future untuk industri umroh dan haji Indonesia',
    publisher: {
      '@type': 'Organization',
      name: 'AMUHI',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.amuhi.id/logo.png',
      },
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://www.amuhi.id/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
    inLanguage: ['id-ID', 'en-US'],
  };

  // BreadcrumbList Schema - For better navigation in search results
  const breadcrumbSchema = breadcrumbs
    ? {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((crumb, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: crumb.name,
          item: `https://www.amuhi.id${crumb.url}`,
        })),
      }
    : null;

  const getSchema = () => {
    if (type === 'breadcrumb' && breadcrumbSchema) {
      return breadcrumbSchema;
    }
    if (type === 'website') {
      return websiteSchema;
    }
    return organizationSchema;
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(getSchema())}</script>
    </Helmet>
  );
}
