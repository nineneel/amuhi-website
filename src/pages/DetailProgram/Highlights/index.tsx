import type { ProgramHighlight } from '../../../types/program';
import { ShieldIcon, renderProgramIcon } from '../icons';
import './Highlights.css';

type HighlightsProps = {
  highlights?: ProgramHighlight[];
};

const defaultHighlights: ProgramHighlight[] = [
  { title: '6 Weeks', subtitle: 'Duration', icon: 'clock' },
  { title: 'Intermediate', subtitle: 'Level', icon: 'bars' },
  { title: 'Bahasa / Eng', subtitle: 'Language', icon: 'globe' },
  { title: 'Certified', subtitle: 'Outcome', icon: 'shield' },
];

export default function Highlights({ highlights }: HighlightsProps) {
  const items = highlights?.length ? highlights : defaultHighlights;

  return (
    <section className="program-highlights">
      <div className="container">
        <div className="highlights-grid">
          {items.map((item) => {
            const icon = renderProgramIcon(item.icon) ?? <ShieldIcon />;

            return (
              <div className="highlight-card" key={item.subtitle}>
                <div className="highlight-icon" aria-hidden="true">
                  {icon}
                </div>
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
