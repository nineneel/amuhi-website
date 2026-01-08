import { Navigate, useParams } from 'react-router-dom';
import { getProgramBySlug } from '../../data/programs';
import Hero from './Hero';
import Highlights from './Highlights';
import MainFunction from './MainFunction';
import ValueCreated from './ValueCreated';
import Curriculum from './Curriculum';
import Testimonials from './Testimonials';
import Registration from './Registration';
import './DetailProgram.css';

export default function DetailProgram() {
  const { slug } = useParams<{ slug: string }>();
  const program = slug ? getProgramBySlug(slug) : undefined;

  if (!program) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="detail-program">
      <Hero program={program} />
      <Highlights highlights={program.detail?.highlights} />
      <ValueCreated program={program} />
      <MainFunction program={program} />
      <Curriculum curriculum={program.detail?.curriculum} />
      <Testimonials testimonials={program.detail?.testimonials} />
      <Registration programName={program.name} features={program.detail?.registrationFeatures} />
      {/* <FloatingBar /> */}
    </div>
  );
}
