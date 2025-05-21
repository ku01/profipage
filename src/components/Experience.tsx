import React from 'react';

interface ExperienceItem {
  jobTitle: string;
  company: string;
  companyLogo: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  achievements: string[];
}

interface ExperienceProps {
  experiences: ExperienceItem[];
}

const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
  return (
    <section className="experience">
      <h2>Professional Experience</h2>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <div className="company-info">
              <img src={exp.companyLogo} alt={`${exp.company} logo`} className="company-logo" />
              <div className="company-details">
                <h3>{exp.jobTitle}</h3>
                <h4>{exp.company}</h4>
                <p className="location-date">
                  {exp.location} | {exp.startDate} - {exp.endDate}
                </p>
              </div>
            </div>
            <div className="role-details">
              <p>{exp.description}</p>
              <ul className="achievements">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx}>{achievement}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience; 