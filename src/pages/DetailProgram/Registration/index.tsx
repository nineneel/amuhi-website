import type { ProgramRegistrationFeature } from '../../../types/program';
import { BookIcon, renderProgramIcon } from '../icons';
import LeadForm, { type LeadFormData } from '../../../components/common/LeadForm';
import './Registration.css';

type RegistrationProps = {
  programName: string;
  features?: ProgramRegistrationFeature[];
};

const defaultFeatures: ProgramRegistrationFeature[] = [
  {
    title: 'Expert Led',
    description: 'Learn from practitioners and regulators who live the industry every day.',
    icon: 'book',
  },
  {
    title: 'Networking',
    description: 'Connect with agents and partners across the Hajj and Umrah ecosystem.',
    icon: 'users',
  },
];

export default function Registration({ programName, features }: RegistrationProps) {
  const handleSubmit = (data: LeadFormData) => {
    console.log('Registration submitted', { ...data, program: programName });
  };

  const items = features?.length ? features : defaultFeatures;

  return (
    <section className="program-registration" id="register">
      <div className="registration-accent" aria-hidden="true" />
      <div className="container registration-grid">
        <div className="registration-copy">
          <h2>
            Building a <br />
            <span>Better Future</span> Together
          </h2>
          <p>
            Join the next cohort of leaders in the Hajj and Umrah industry. Fill out the form to secure your spot in
            {programName ? ` ${programName}` : ' the program'}.
          </p>

          <div className="registration-features">
            {items.map((feature) => {
              const icon = renderProgramIcon(feature.icon) ?? <BookIcon />;

              return (
                <div className="registration-feature" key={feature.title}>
                  <div className="registration-feature-icon" aria-hidden="true">
                    {icon}
                  </div>
                  <div>
                    <h4>{feature.title}</h4>
                    <p>{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="registration-form-card">
          <LeadForm
            title="Registration Form"
            subtitle="Let us know you better"
            buttonText="Submit Registration"
            variant="light"
            onSubmit={handleSubmit}
            placeholders={{
              travelName: 'Travel Agency Name *',
              idNumber: 'ID Number (KTP/Passport) *',
            }}
          />
        </div>
      </div>
    </section>
  );
}
