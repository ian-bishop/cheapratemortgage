import type { Metadata } from 'next';
import { DM_Serif_Display, Source_Sans_3 } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const dmSerif = DM_Serif_Display({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Current Mortgage Rates | CheapRateMortgage.com',
    template: '%s | CheapRateMortgage.com',
  },
  description:
    'Track current 30-year and 15-year fixed mortgage rates. Weekly updated data from Freddie Mac PMMS. Compare historical trends and make informed decisions.',
  keywords: [
    'mortgage rates',
    '30-year mortgage',
    '15-year mortgage',
    'home loan rates',
    'Freddie Mac',
    'PMMS',
    'current mortgage rates',
    'how to get best mortgage rate',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://cheapratemortgage.com',
    siteName: 'CheapRateMortgage.com',
    title: 'Current Mortgage Rates | CheapRateMortgage.com',
    description:
      'Track weekly mortgage rate averages for 30-year and 15-year fixed mortgages.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Current Mortgage Rates | CheapRateMortgage.com',
    description: 'Track weekly mortgage rate averages',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSerif.variable} ${sourceSans.variable}`}>
      <body className="antialiased">
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
