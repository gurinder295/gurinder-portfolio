'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>©{year ? ` ${year}` : ''} Gurinder Meelu</span>
        <div>
          <a
            href="https://github.com/gurinder295"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
