import './Footer.css';

const associationLinks = [
    'Home',
    'Program',
    'About Us',
    'Partnership',
    'Edu Journal',
    'Resources',
];

const programLinks = [
    'AMUHI Academy',
    'AMUHI Check',
    'AMUHI Protect',
    'AMUHI Care',
    'AMUHI Network',
    'AMUHI Digital',
];

export default function Footer() {
    return (
        <footer id="footer" className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <div className="footer-address-cover">
                            <img src="/logo.png" alt="AMUHI Logo" className="footer-logo" />
                            <h4 className="footer-label">Address:</h4>
                            <p className="brand-subtitle">Kantor Pusat Amuhi:</p>
                            <address className="footer-address">
                                Kota Kasablanka, Prudential Centre, Lantai 7,<br />
                                Jl. Casablanca Raya Kav No.88 , Jakarta Selatan.
                            </address>
                        </div>

                        <div className="footer-contact">
                            <div className="footer-contact-item">
                                <span>Panitia: 021-38825167</span>
                            </div>
                            <a href="mailto:milenialumrahhaji@gmail.com" className="footer-contact-item">
                                <span>Email : milenialumrahhaji@gmail.com</span>
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
                        <h4>Association</h4>
                        <nav className="footer-links">
                            {associationLinks.map((link, index) => (
                                <a key={index} href="#" className="footer-link">{link}</a>
                            ))}
                        </nav>
                    </div>

                    <div className="footer-column">
                        <h4>Program</h4>
                        <nav className="footer-links">
                            {programLinks.map((link, index) => (
                                <a key={index} href="#" className="footer-link">{link}</a>
                            ))}
                        </nav>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© 2026 AMUHI. All rights reserved.</p>
                    <div className="footer-bottom-links">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                        <a href="#">Language: ID</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
