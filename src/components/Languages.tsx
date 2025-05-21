import React from 'react';

interface Language {
  name: string;
  proficiency: string;
  level: number; // 1-5 for visualization
}

interface LanguagesProps {
  languages: Language[];
}

const Languages: React.FC<LanguagesProps> = ({ languages }) => {
  return (
    <section className="languages">
      <h2>Languages</h2>
      <div className="languages-list">
        {languages.map((language, index) => (
          <div key={index} className="language-item">
            <div className="language-info">
              <h3>{language.name}</h3>
              <span className="proficiency-label">{language.proficiency}</span>
            </div>
            <div className="proficiency-dots">
              {[...Array(5)].map((_, i) => (
                <span 
                  key={i} 
                  className={`dot ${i < language.level ? 'filled' : ''}`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Languages; 