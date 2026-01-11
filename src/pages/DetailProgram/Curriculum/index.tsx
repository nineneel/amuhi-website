import type { ProgramCurriculum } from '../../../types/program';
import { DownloadIcon } from '../icons';
import './Curriculum.css';

type CurriculumProps = {
  curriculum?: ProgramCurriculum;
};

const defaultCurriculum: ProgramCurriculum = {
  title: 'Program Pillars',
  pillarLabel: 'PILLAR',
  description: 'Pilar-pilar utama yang mendasari nilai, standar, dan eksekusi program.',
  pillars: [
    {
      label: 'PILLAR 1',
      title: 'Regulatory Compliance & Licensing',
      description: 'Memahami regulasi, sistem visa, dan kewajiban legal sebelum beroperasi.',
    },
    {
      label: 'PILLAR 2',
      title: 'Operational Excellence',
      description: 'Pengelolaan itinerary, vendor, dan kesiapan menghadapi situasi darurat.',
    },
    {
      label: 'PILLAR 3',
      title: 'Growth & Experience',
      description: 'Strategi pemasaran, pelayanan jamaah, dan pemantauan kepuasan.',
    },
  ],
  benefits: [
    'Standar kerja yang jelas dan terukur',
    'Output selaras dengan regulasi dan kebutuhan jamaah',
    'Pendampingan dan akses jejaring industri',
  ],
};

export default function Curriculum({ curriculum }: CurriculumProps) {
  const pillars = curriculum?.pillars?.length ? curriculum.pillars : defaultCurriculum.pillars;
  // const benefits = curriculum?.benefits?.length ? curriculum.benefits : defaultCurriculum.benefits;
  const title = curriculum?.title ?? defaultCurriculum.title ?? 'Program Pillars';
  const description = curriculum?.description ?? defaultCurriculum.description;
  const syllabusUrl = curriculum?.syllabusUrl;
  // pillarLabel reserved for future display; currently not rendered to avoid unused variable

  return (
    <section className="program-curriculum" id="curriculum">
      <div className="container curriculum-grid">
        <div className="curriculum-timeline">
          <div className="curriculum-header">
            <h2>{title}</h2>
            {description ? <p>{description}</p> : null}
          </div>

          <div className="timeline">
            {pillars.map((pillar) => (
              <div className="timeline-item" key={pillar.title}>
                <div className="timeline-marker" aria-hidden="true" />
                <div className="timeline-card">
                  <h3>{pillar.title}</h3>
                  <p>{pillar.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="curriculum-side">
          {/* <div className="benefits-card">
            <h3>What you&apos;ll get</h3>
            <ul>
              {benefits.map((item) => (
                <li key={item}>
                  <span className="benefit-icon" aria-hidden="true">
                    <CheckIcon />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div> */}

          <div className="syllabus-card">
            <div className="syllabus-icon" aria-hidden="true">
              <DownloadIcon />
            </div>
            <h4>Program Syllabus</h4>
            <p>Download the full PDF breakdown of the course.</p>
            {syllabusUrl ? (
              <a className="syllabus-button" href={syllabusUrl} target="_blank" rel="noreferrer">
                Download PDF
              </a>
            ) : (
              <button type="button" className="syllabus-button">
                Download PDF
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
