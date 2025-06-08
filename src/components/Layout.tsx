import React from 'react';
import Header from './Header';
import ProfessionalSummary from './ProfessionalSummary';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';

interface LayoutProps {
  data: {
    personalInfo: any;
    summary: string;
    highlights: string[];
    experiences: any[];
    education: any[];
    skills: any[];
    skillCategories: string[];
  };
}

const Layout: React.FC<LayoutProps> = ({ data }) => {
  return (
    <div className="layout" data-testid="profile-container">
      <div data-testid="header-section">
        <Header personalInfo={data.personalInfo} />
      </div>
      <div className="content-grid">
        <div className="left-column">
          <ProfessionalSummary 
            summary={data.summary} 
            highlights={data.highlights} 
          />
          <div data-testid="experience-section">
            <Experience experiences={data.experiences} />
          </div>
        </div>
        <div className="right-column">
          <div data-testid="skills-section">
            <Skills 
              skills={data.skills} 
              categories={data.skillCategories} 
            />
          </div>
          <div data-testid="education-section">
            <Education education={data.education} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout; 