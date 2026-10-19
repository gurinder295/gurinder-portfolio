import type { Metadata } from 'next';
import Navbar from './components/navbar';
import Footer from './components/footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'Gurinder Meelu | Portfolio',
  description: 'A collection of Gurinder Meelu’s work and learning in web design and development.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
