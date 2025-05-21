import React from 'react';

interface EducationItem {
  degree: string;
  institution: string;
  institutionLogo: string;
  location: string;
  startDate: string;
  endDate: string;
  description?: string;
}

interface EducationProps {
  education: EducationItem[];
}

const Education: React.FC<EducationProps> = ({ education }) => {
  return (
    <section className="education">
      <h2>Education</h2>
      <div className="education-list">
        {education.map((edu, index) => (
          <div key={index} className="education-item">
            <div className="institution-info">
              <img 
                src={edu.institutionLogo} 
                alt={`${edu.institution} logo`} 
                className="institution-logo" 
              />
              <div className="institution-details">
                <h3>{edu.degree}</h3>
                <h4>{edu.institution}</h4>
                <p className="location-date">
                  {edu.location} | {edu.startDate} - {edu.endDate}
                </p>
              </div>
            </div>
            {edu.description && (
              <div className="education-description">
                <p>{edu.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education; 