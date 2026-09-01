import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

const siteUrl = 'https://adamgitgud.github.io';
const title = 'Adam Holmes — Technical Lead / Senior Software Engineer';
const description =
  'Technical Lead and backend/full-stack engineer with 15+ years of experience across TypeScript, Node.js, Python and React.';

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
        alt: 'Adam Holmes — Technical Lead / Senior Software Engineer',
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
  jobTitle: 'Technical Lead / Senior Software Engineer',
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
