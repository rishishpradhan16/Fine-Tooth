import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://zerobugstudio.com'),
  title: 'ZeroBugStudio — Web & Mobile App Development, QA & Test Automation',
  description: 'We design & develop modern responsive websites, native & cross-platform mobile apps, and help teams build reliable automated test suites and bug-free releases.',
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    type: 'website',
    title: 'ZeroBugStudio — Web & Mobile App Development, QA & Test Automation',
    description: 'We design & develop modern responsive websites, native & cross-platform mobile apps, and help teams build reliable automated test suites and bug-free releases.',
    images: ['/previews/desktop.png'],
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="m-text">
        {children}
      </body>
    </html>
  );
}
