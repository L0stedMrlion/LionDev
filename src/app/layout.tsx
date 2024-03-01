import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './css/globals.css';
import './css/profile-image.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mrlion',
  description: "🦁 Mrlion's page about him",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
