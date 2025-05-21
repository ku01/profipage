import React from 'react';

interface ProfessionalSummaryProps {
  summary: string;
  highlights: string[];
}

const ProfessionalSummary: React.FC<ProfessionalSummaryProps> = ({ summary, highlights }) => {
  return (
    <section className="professional-summary">
      <h2>Professional Summary</h2>
      <div className="summary-content">
        <p>{summary}</p>
        {highlights.length > 0 && (
          <div className="career-highlights">
            <h3>Career Highlights</h3>
            <ul>
              {highlights.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProfessionalSummary; 