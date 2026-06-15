import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <div className="nav-container">
        <nav>
          <button
            className="nav-hamburger"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span className="nav-hamburger-bar" />
            <span className="nav-hamburger-bar" />
            <span className="nav-hamburger-bar" />
          </button>
          <ul className={menuOpen ? 'nav-open' : ''}>
            <li>
              <Link href="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/music" onClick={() => setMenuOpen(false)}>
                Music
              </Link>
            </li>
            <li>
              <Link href="/guide" onClick={() => setMenuOpen(false)}>
                What is a Ceilidh?
              </Link>
            </li>
            <li>
              <Link href="/videos" onClick={() => setMenuOpen(false)}>
                Videos
              </Link>
            </li>
            <li>
              <Link href="/gallery" onClick={() => setMenuOpen(false)}>
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/locations" onClick={() => setMenuOpen(false)}>
                Areas
              </Link>
            </li>
            <li>
              <Link href="/feedback" onClick={() => setMenuOpen(false)}>
                Feedback
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="maplewood-banner-container">
        <div className="maplewood-banner">Maplewood Ceilidh Band</div>
      </div>
    </div>
  );
};

export default Navbar;
