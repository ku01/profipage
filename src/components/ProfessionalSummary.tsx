import React from 'react';

interface ProfessionalSummaryProps {
  summary: string;
  highlights: string[];
}

const ProfessionalSummary: React.FC<ProfessionalSummaryProps> = ({ summary, highlights }) => {
  return (
    <section className="professional-summary">
      <div className="summary-grid">
        <div className="summary-column">
          <h2>Professional Summary</h2>
          <div className="summary-content">
            <p>{summary}</p>
          </div>
        </div>
        {highlights.length > 0 && (
          <div className="highlights-column">
            <h2>Career Highlights</h2>
            <ul className="highlights-list">
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