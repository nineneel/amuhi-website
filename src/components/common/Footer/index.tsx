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
                    <p>© 2026 AMUHI - Asosiasi Milenial Umroh Haji Indonesia. All rights reserved.</p>
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
