// app/layout.tsx
import './globals.css';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Life OS by sadanimebae',
  description: 'A cozy, structured system for your creative life.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100`}>
        <Header />
        <main className="max-w-screen-xl mx-auto px-4 py-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
