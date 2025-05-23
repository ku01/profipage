import React from 'react';

interface Skill {
  name: string;
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
                  <span key={index} className="skill-item">
                    {skill.name}
                  </span>
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