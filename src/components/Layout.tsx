import React from 'react';
import Header from './Header';
import ProfessionalSummary from './ProfessionalSummary';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';
import Languages from './Languages';

interface LayoutProps {
  data: {
    personalInfo: any;
    summary: string;
    highlights: string[];
    experiences: any[];
    education: any[];
    skills: any[];
    skillCategories: string[];
    languages: any[];
  };
}

const Layout: React.FC<LayoutProps> = ({ data }) => {
  return (
    <div className="layout">
      <Header personalInfo={data.personalInfo} />
      <main className="main-content">
        <ProfessionalSummary 
          summary={data.summary} 
          highlights={data.highlights} 
        />
        <Experience experiences={data.experiences} />
        <Education education={data.education} />
        <Skills 
          skills={data.skills} 
          categories={data.skillCategories} 
        />
        <Languages languages={data.languages} />
      </main>
    </div>
  );
};

export default Layout; 