import type { ProgramData } from '../../../types/program';
import './MainFunction.css';

type MainFunctionProps = {
  program: ProgramData;
};

const DEFAULT_VISUAL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAFXWAvdPlyJesEACbpsiVlG2wyEhoHddmVeyG4msGlmSRPeXTk5g3aAk0_4YAy6WcEnfyosNDX-KUlBrb7h9MGaLNsaYwbabQS7W_cdsR8uVJJRrJ_8FARgP-VA_l6NPEBiDiuKMywXS6NeNu0aY2yP7iwKIAXS4C7heubPPOuu3z91V_jcrZLzIpczWJPcxkjK-LZgpZ-YpHGglcshLW5TEwdanqYvbqzc8CexXlXQpzF04gNlfiEcxmrLLUDVFzCERaYUsRXCmk';

export default function MainFunction({ program }: MainFunctionProps) {
  const mainFunction = program.detail?.mainFunction ?? program.shortDescription;
  const explanation = program.longDescription;
  const visual = program.detail?.mainImage ?? program.heroImage ?? DEFAULT_VISUAL;
  const quote = program.tagline || "We're a movement shaping the future.";

  if (!mainFunction && !explanation) return null;

  return (
    <section className="program-main-function" id="main-function">
      <div className="container main-function-card">
        <div className="main-function-media">
          <div className="main-function-visual">
            <img src={visual} alt={`${program.name} illustration`} loading="lazy" />
          </div>
          <div className="main-function-quote">
            <span>{quote}</span>
          </div>
        </div>

        <div className="main-function-content">
          <h2>{program.name}</h2>
          {mainFunction ? <p className="main-function-text">{mainFunction}</p> : null}
          {explanation ? <p className="main-function-description">{explanation}</p> : null}
        </div>
      </div>
    </section>
  );
}
