import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Fraunces, Manrope } from 'next/font/google';
import './globals.css';
import { siteMetaByLocale } from '@/lib/content';
import { defaultLocale } from '@/lib/i18n';

const manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-sans',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
});

const defaultSiteMeta = siteMetaByLocale[defaultLocale];

export const metadata: Metadata = {
  title: defaultSiteMeta.title,
  description: defaultSiteMeta.description,
  openGraph: {
    title: defaultSiteMeta.title,
    description: defaultSiteMeta.description,
    siteName: defaultSiteMeta.name,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultSiteMeta.title,
    description: defaultSiteMeta.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang={defaultLocale}>
      <body className={`${manrope.variable} ${fraunces.variable} antialiased`}>{children}</body>
    </html>
  );
}
