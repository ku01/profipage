import React from 'react';

interface PersonalInfo {
  name: string;
  title: string;
  contact: {
    email: string;
    phone: string;
    location: string;
    links: { [key: string]: string };
  };
}

interface HeaderProps {
  personalInfo: PersonalInfo;
}

const Header: React.FC<HeaderProps> = ({ personalInfo }) => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="profile-info">
          <h1>{personalInfo.name}</h1>
          <h2>{personalInfo.title}</h2>
          <div className="contact-info">
            <p>{personalInfo.contact.email}</p>
            <p>{personalInfo.contact.phone}</p>
            <p>{personalInfo.contact.location}</p>
            <div className="social-links">
              {Object.entries(personalInfo.contact.links).map(([platform, url]) => (
                <a key={platform} href={url} target="_blank" rel="noopener noreferrer">
                  {platform}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 