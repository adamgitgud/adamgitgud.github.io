import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

const siteUrl = 'https://adamgitgud.github.io';

const title = 'Adam Holmes — Backend Engineer & Technical Lead';

const description =
  'Hands-on backend engineer and technical lead with 15+ years in software engineering, specialising in TypeScript, Node.js, Applied AI and React.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: '/' },
  icons: { icon: '/icon.png' },
  openGraph: {
    type: 'profile',
    url: '/',
    title,
    description,
    siteName: 'Adam Holmes',
    images: [
      {
        url: '/og-v2.png',
        width: 1200,
        height: 630,
        alt: 'Adam Holmes — Backend Engineer & Technical Lead',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/og-v2.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const person = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Adam Holmes',
  url: siteUrl,
  jobTitle: 'Backend Engineer & Technical Lead',
  description,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Cardiff',
    addressRegion: 'Wales',
    addressCountry: 'GB',
  },
  sameAs: ['https://www.linkedin.com/in/ad-holmes'],
  knowsAbout: [
    'TypeScript',
    'Node.js',
    'NestJS',
    'AI integrations',
    'Technical leadership',
    'Clean architecture',
    'Domain-driven design',
    'Python',
    'Django',
    'FastAPI',
    'React',
    'Java',
    'Spring Boot',
    'PostgreSQL',
    'Distributed systems',
    'Event-driven architecture',
  ],
} as const;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-GB">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(person).replace(/</g, '\\u003c'),
          }}
        />
      </body>
    </html>
  );
}
