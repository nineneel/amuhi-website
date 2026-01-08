import type { ProgramData } from '../../../types/program';
import { CheckIcon } from '../icons';
import './ValueCreated.css';

type ValueCreatedProps = {
  program: ProgramData;
};

export default function ValueCreated({ program }: ValueCreatedProps) {
  const valueCreated = program.detail?.valueCreated;

  if (!valueCreated || valueCreated.length === 0) return null;

  return (
    <section className="program-value-created" id="value-created">
      <div className="container value-created-card">
        <div className="value-created-header">
          <p className="eyebrow">Value Created</p>
          <h2>Mengapa {program.name} Penting</h2>
        </div>
        <ul className="value-created-list">
          {valueCreated.map((item) => (
            <li key={item}>
              <span className="value-icon" aria-hidden="true">
                <CheckIcon />
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
