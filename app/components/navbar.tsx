'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const getLinkProps = (href: string) => ({
    className: pathname === href ? 'activeLink' : 'inactiveLink',
    'aria-current': pathname === href ? ('page' as const) : undefined,
  });

  return (
    <header className="site-header">
      <nav className="nav container" aria-label="Main navigation">
        <Link href="/" className="logo" aria-label="Gurinder Meelu home">
          <img src="/G.png" alt="" />
        </Link>
        <div className="nav-links">
          <Link href="/" {...getLinkProps('/')}>
            Home
          </Link>
          <Link href="/about" {...getLinkProps('/about')}>
            About
          </Link>
          <Link href="/projects" {...getLinkProps('/projects')}>
            Projects
          </Link>
          <Link href="/skills" {...getLinkProps('/skills')}>
            Skills
          </Link>
          <Link href="/contact" {...getLinkProps('/contact')}>
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
