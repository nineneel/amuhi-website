import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { programs } from '../../../data/programs';

type NavLink = {
    name: string;
    href: string;
    hash?: string;
    hasSubmenu?: boolean;
};

const navLinks: NavLink[] = [
    { name: 'Home', href: '/', hash: '#home' },
    { name: 'Programs', href: '/', hasSubmenu: true },
    { name: 'About Us', href: '/about' },
    { name: 'News', href: '/news' },
];

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('Home');
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    const navRef = useRef<HTMLElement | null>(null);
    const location = useLocation();
    const navigate = useNavigate();
    const isHomePage = location.pathname === '/';

    useEffect(() => {
        if (!isHomePage) {
            if (location.pathname.startsWith('/news')) {
                // eslint-disable-next-line react-hooks/set-state-in-effect
                setActiveLink('News');
            } else if (location.pathname.startsWith('/programs/')) {
                setActiveLink('Programs');
            } else if (location.pathname === '/about') {
                setActiveLink('About Us');
            } else {
                setActiveLink('');
            }
            return;
        }

        const handleScroll = () => {
            const sections = navLinks
                .filter((link) => link.hash)
                .map(link => ({
                    name: link.name,
                    element: link.hash ? document.querySelector(link.hash) : null
                }));

            const scrollPosition = window.scrollY + window.innerHeight / 2;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                if (section.element) {
                    const rect = section.element.getBoundingClientRect();
                    const top = rect.top + window.scrollY;
                    if (scrollPosition >= top) {
                        setActiveLink(section.name);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isHomePage, location.pathname]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (navRef.current && !navRef.current.contains(event.target as Node)) {
                setIsSubmenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setIsSubmenuOpen(false);
    }, [location.pathname]);

    const handleNavClick = (link: NavLink) => {
        if (link.hasSubmenu) {
            setActiveLink(link.name);
            setIsSubmenuOpen((prev) => !prev);
            return;
        }

        setIsMobileMenuOpen(false);
        setIsSubmenuOpen(false);

        if (isHomePage && link.hash) {
            const element = document.querySelector(link.hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
            setActiveLink(link.name);
            return;
        }

        const target = link.hash ? `${link.href}${link.hash}` : link.href;
        navigate(target);
        setActiveLink(link.name);
    };

    return (
        <nav className="navbar" ref={navRef}>
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={() => setActiveLink('Home')}>
                    <span className="navbar-logo-text">AMUHI</span>
                </Link>

                <button
                    className="mobile-menu-btn"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <ul className={`navbar-nav ${isMobileMenuOpen ? 'open' : ''}`}>
                    {navLinks.map((link) => (
                        <li key={link.name} className={link.hasSubmenu ? 'has-submenu' : ''}>
                            <button
                                className={`nav-link ${activeLink === link.name ? 'active' : ''}`}
                                onClick={() => handleNavClick(link)}
                                aria-expanded={link.hasSubmenu ? isSubmenuOpen : undefined}
                            >
                                {link.name}
                            </button>
                            {link.hasSubmenu && (
                                <div className={`submenu ${isSubmenuOpen ? 'open' : ''}`}>
                                    {programs.map((program) => (
                                        <Link
                                            key={program.id}
                                            to={`/programs/${program.slug}`}
                                            className="submenu-item"
                                            onClick={() => {
                                                setIsMobileMenuOpen(false);
                                                setActiveLink('Programs');
                                                setIsSubmenuOpen(false);
                                            }}
                                        >
                                            <img src={program.icon} alt={program.name} className="submenu-icon" />
                                            <div className="submenu-content">
                                                <span className="submenu-title">{program.name}</span>
                                                <span className="submenu-description">{program.tagline}</span>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </li>
                    ))}
                </ul>

                <div className="navbar-actions">
                    <a href="/files/MUKERNAS_1.pdf" className="navbar-pdf-btn" target="_blank" rel="noopener noreferrer">
                        <span>MUKERNAS 1</span>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                    </a>

                    <a href="https://chat.whatsapp.com/IOZL5RkUma31KpqYxek9cK" className="navbar-cta" target="_blank" rel="noopener noreferrer">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                    </a>
                </div>
            </div>
        </nav>
    );
}
