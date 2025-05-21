import React from 'react';

interface Skill {
  name: string;
  proficiency?: number; // 0-100
  category: string;
}

interface SkillsProps {
  skills: Skill[];
  categories: string[];
}

const Skills: React.FC<SkillsProps> = ({ skills, categories }) => {
  return (
    <section className="skills">
      <h2>Skills & Technologies</h2>
      <div className="skills-content">
        {categories.map((category) => {
          const categorySkills = skills.filter((skill) => skill.category === category);
          return (
            <div key={category} className="skill-category">
              <h3>{category}</h3>
              <div className="skill-list">
                {categorySkills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <span className="skill-name">{skill.name}</span>
                    {skill.proficiency !== undefined && (
                      <div className="skill-proficiency">
                        <div 
                          className="proficiency-bar"
                          style={{ width: `${skill.proficiency}%` }}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills; 