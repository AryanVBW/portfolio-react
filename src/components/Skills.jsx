import React from 'react';
import placeholder from '../assets/png/main-favicon.png';

// OS icons
import kaliLogo from '../assets/os/Kali.png';
import garudaLogo from '../assets/os/garuda.png';
import parrotLogo from '../assets/os/Parrot.png';
import debianLogo from '../assets/os/debiBg.png';
import ubuntuLogo from '../assets/os/ubuntu-logo.png';
import archLogo from '../assets/os/arch-linux-384.png';
import windowsLogo from '../assets/os/windows-240.png';

// Cloud icons
import azureLogo from '../assets/png/azure-240.png';
import googleCloudLogo from '../assets/png/google-cloud-240.png';
import awsLogo from '../assets/png/aws-240.png';

// Database icons
import mongodbLogo from '../assets/png/mongodb-logo.png';
import supabaseLogo from '../assets/png/supabase-logo.png';

// Tech Stack icons
import htmlLogo from '../assets/png/htmllogo.png';
import cssLogo from '../assets/png/csslogo.png';
import jsLogo from '../assets/png/jslogo.png';
import typescriptLogo from '../assets/png/typescript-logo.png';
import nodejsLogo from '../assets/png/nodejs-144.png';
import nestjsLogo from '../assets/png/nestjs-logo.png';
import vueLogo from '../assets/png/vue-logo.png';
import dockerLogo from '../assets/png/docker-mark-blue.png';
import reactLogo from '../assets/png/reactlogo.png';
import angularLogo from '../assets/png/angular-logo.png';
import githubLogo from '../assets/png/githublogo.png';
import gitLogo from '../assets/png/gitlogo.png';
import bashLogo from '../assets/png/bash-144.png';
import javaLogo from '../assets/png/java-144.png';
import phpLogo from '../assets/png/php-96.png';
import aiLogo from '../assets/png/ailogo.png';
import mysqlLogo from '../assets/png/mysql.png';
import wordpressLogo from '../assets/png/wordpress-144.png';
import canvaLogo from '../assets/png/canvalogo.png';

const techSkills = [
  { name: "HTML", icon: htmlLogo },
  { name: "CSS", icon: cssLogo },
  { name: "JS", icon: jsLogo },
  { name: "TypeScript", icon: typescriptLogo },
  { name: "NODE.js", icon: nodejsLogo },
  { name: "Nest.js", icon: nestjsLogo },
  { name: "Vue.js", icon: vueLogo },
  { name: "Docker", icon: dockerLogo },
  { name: "REACT", icon: reactLogo },
  { name: "Angular", icon: angularLogo },
  { name: "GITHUB", icon: githubLogo, needsInvert: true },
  { name: "GIT", icon: gitLogo },
  { name: "Bash", icon: bashLogo },
  { name: "PYTHON", icon: placeholder },
  { name: "JAVA", icon: javaLogo },
  { name: "PHP", icon: phpLogo },
  { name: "ADOBE AI", icon: aiLogo },
  { name: "MySQL", icon: mysqlLogo },
  { name: "Wordpress", icon: wordpressLogo },
  { name: "CANVA", icon: canvaLogo }
];

const operatingSystems = [
  { name: "Kali LINUX", icon: kaliLogo },
  { name: "GARUDA Linux", icon: garudaLogo },
  { name: "Parrot OS", icon: parrotLogo },
  { name: "Debian", icon: debianLogo },
  { name: "Ubantu", icon: ubuntuLogo },
  { name: "Arch", icon: archLogo },
  { name: "Windows", icon: windowsLogo }
];

const cloudPlatforms = [
  { name: "Azure", icon: azureLogo },
  { name: "Google Cloud", icon: googleCloudLogo },
  { name: "AWS", icon: awsLogo }
];

const databaseTech = [
  { name: "MongoDB", icon: mongodbLogo },
  { name: "Supabase", icon: supabaseLogo }
];

function TechStackSection({ title, skills, ariaLabel }) {
  return (
    <div className="frontend-dev-section">
      <h3 className="frontend-dev-heading scroll-animate scroll-delay-1" tabIndex="0" aria-label={ariaLabel}>
        {title}
      </h3>
      <ul className="tech-stack-wrapper">
        {skills.map((skill, index) => (
          <li key={index} className="tech-stack-box" data-aos="zoom-in" data-aos-duration="500" data-aos-delay={100 + (index * 50)}>
            <img src={skill.icon} alt={`${skill.name} skill`} className={`tech-stack-logo ${skill.needsInvert ? 'needtobeinvert' : ''}`} />
            <span className="tooltip">{skill.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Skills() {
  return (
    <section className="skills-section-container" id="skills">
      <div className="skills-section">
        <div className="section-heading" data-aos="fade-up" data-aos-duration="600">
          <h2 className="section-heading-article scroll-animate">
            &#60;/Skills&#62;
          </h2>
        </div>

        <TechStackSection 
          title="Tech Stack" 
          skills={techSkills} 
          ariaLabel="the skills i have in"
        />
      </div>
      
      <TechStackSection 
        title="Proficient with Diverse Operating Systems" 
        skills={operatingSystems} 
        ariaLabel="Proficient with Diverse Operating Systems"
      />
      
      <TechStackSection 
        title="Skilled in Cloud Platforms & Web Services" 
        skills={cloudPlatforms} 
        ariaLabel="Skilled in Cloud Platforms & Web Services"
      />
      
      <TechStackSection 
        title="Skilled in Database Technologies" 
        skills={databaseTech} 
        ariaLabel="Skilled in Database Technologies"
      />
    </section>
  );
}

export default Skills; 