import './Organization.css';
import personImg from '../../../assets/person.png';

const members = [
    {
        name: 'Antar Helmi, S.M',
        role: 'Ketua Umum',
        description: 'Profile singkat tentang pengalaman di travel haji dan umrah',
        photo: personImg,
    },
    {
        name: 'Ali Maradona',
        role: 'Bendahara Umum',
        description: 'Profile singkat tentang pengalaman di travel haji dan umrah',
        photo: personImg,
    },
    {
        name: 'Dwita Syahranu',
        role: 'Sekretaris Jenderal',
        description: 'Profile singkat tentang pengalaman di travel haji dan umrah',
        photo: personImg,
    },
];

export default function Organization() {
    return (
        <section id="organization" className="organization section">
            <div className="container">
                <h2 className="section-title">ORGANIZATION</h2>
            </div>

            <div className="container org-container">
                <div className="org-main-content">
                    <div className="org-header">
                        <span className="org-badge">Dewan Pengurus</span>
                    </div>

                    <div className="org-grid">
                        {members.map((member, index) => (
                            <div key={index} className="org-member">
                                <div className="org-photo-container">
                                    <div className="org-photo">
                                        {member.photo ? (
                                            <img src={member.photo} alt={member.name} />
                                        ) : (
                                            <div className="org-photo-placeholder">👤</div>
                                        )}
                                    </div>
                                </div>
                                <div className="org-info">
                                    <p className="org-role">{member.role}</p>
                                    <h3 className="org-name">{member.name}</h3>
                                    <p className="org-description">{member.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="org-vertical-decoration">
                    <img src="/logo-icon.png" alt="" className="org-deco-logo" />
                </div>
            </div>
        </section>
    );
}
