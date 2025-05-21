import React from 'react';
import Header from './Header';
import ProfessionalSummary from './ProfessionalSummary';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';
import Languages from './Languages';
import PDFExport from './PDFExport';

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
      <div className="export-container">
        <PDFExport />
      </div>
      <Header personalInfo={data.personalInfo} />
      <div className="content-grid">
        <div className="left-column">
          <Experience experiences={data.experiences} />
          <Education education={data.education} />
        </div>
        <div className="right-column">
          <ProfessionalSummary 
            summary={data.summary} 
            highlights={data.highlights} 
          />
          <Languages languages={data.languages} />
          <Skills 
            skills={data.skills} 
            categories={data.skillCategories} 
          />
        </div>
      </div>
    </div>
  );
};

export default Layout; 