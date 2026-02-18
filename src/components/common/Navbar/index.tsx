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
    { name: 'Activity', href: '/activity' },
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
            } else if (location.pathname === '/activity') {
                setActiveLink('Activity');
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

                <div className="navbar-mobile-actions">
                    <button
                        className="mobile-menu-btn"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    <a
                        className="nav-link active navbar-register-btn"
                        href="https://portal.amuhi.id/register"
                    >
                        <span>Daftar Sekarang</span>
                    </a>
                </div>

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

            </div>
        </nav>
    );
}
