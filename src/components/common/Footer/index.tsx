import { Link } from 'react-router-dom';
import { programs } from '../../../data/programs';
import './Footer.css';

const navigationLinks = [
    { label: 'Home', to: '/#home' },
    { label: 'Programs', to: '/#programs' },
    { label: 'About Us', to: '/about' },
    { label: 'News', to: '/news' },
];

export default function Footer() {
    return (
        <footer id="footer" className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <div className="footer-address-cover">
                            <img src="/logo.png" alt="AMUHI Logo" className="footer-logo" />
                            <h4 className="footer-label">ASOSIASI MILENIAL UMROH HAJI INDONESIA</h4>
                            <p className="brand-subtitle">Address:</p>
                            <address className="footer-address">
                                Kasablanca Office Tower A, Lantain 18, Unit A-H <br />
                                Jl. Casablanca Raya Kav No.88, Jakarta Selatan, DKI Jakarta
                            </address>
                        </div>

                        <div className="footer-contact">
                            <a href="mailto:better@amuhi.id" className="footer-contact-item">
                                <span>Email : better@amuhi.id</span>
                            </a>
                            <a href="https://instagram.com/amuhi.id" className="footer-contact-item" target="_blank" rel="noopener noreferrer">
                                <span>Instagram: @amuhi.id</span>
                            </a>
                            <a href="https://www.amuhi.id" className="footer-contact-item" target="_blank" rel="noopener noreferrer">
                                <span>Website: www.amuhi.id</span>
                            </a>
                        </div>
                    </div>

                    <div className="footer-column">
                        <h4>Menu</h4>
                        <nav className="footer-links">
                            {navigationLinks.map((link) => (
                                <Link key={link.to} to={link.to} className="footer-link">
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    <div className="footer-column">
                        <h4>Program</h4>
                        <nav className="footer-links">
                            {programs.map((program) => (
                                <Link
                                    key={program.slug}
                                    to={`/programs/${program.slug}`}
                                    className="footer-link"
                                >
                                    {program.name}
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© 2026 AMUHI - Asosiasi Milenial Umroh Haji Indonesia. All rights reserved.</p>
                    <div className="footer-bottom-links">
                        <Link to="/about">About Us</Link>
                        <Link to="/news">News</Link>
                        <Link to="/#home">Back to Top</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
