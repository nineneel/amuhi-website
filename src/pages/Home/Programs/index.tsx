import { Link } from 'react-router-dom';
import { programs } from '../../../data/programs';
import './Programs.css';

export default function Programs() {
    return (
        <section id="programs" className="programs section">
            <div className="container">
                <h2 className="section-title">OUR PROGRAMS</h2>
            </div>

            <div className="container">
                <div className="programs-grid">
                    {programs.map((program) => (
                        <article key={program.id} className="program-card">
                            <div className="program-header">
                                <div className="program-icon-wrapper">
                                    <img src={program.icon} alt={program.name} />
                                </div>
                                <h3 className="program-title">
                                    AMUHI <br />
                                    <span>{program.slug.charAt(0).toUpperCase() + program.slug.slice(1)}</span>
                                </h3>
                            </div>
                            {program.heroImage && (
                                <div className="program-image">
                                    <img src={program.heroImage} alt={`${program.name} preview`} />
                                </div>
                            )}
                            <p className="program-description">{program.shortDescription}</p>
                            <div className="program-divider" />
                            <ul className="program-points">
                                {program.features.slice(0, 3).map((feature, idx) => (
                                    <li key={idx}>
                                        <svg className="check-icon" viewBox="0 0 24 24" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>{feature.title}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link to={`/programs/${program.slug}`} className="program-cta">
                                LEARN MORE
                            </Link>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
