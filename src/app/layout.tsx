import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import buildProvidersTree from '@/components/ProvidersTree';
import Header from '@/components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const ProvidersTree = buildProvidersTree([]);

  return (
    <html lang="en">
      <body className={`${inter.className} container mx-auto bg-primary-dark`}>
        <ProvidersTree>
          <main className="min-h-screen">
            <Header />
            {children}
          </main>
        </ProvidersTree>
      </body>
    </html>
  );
}
