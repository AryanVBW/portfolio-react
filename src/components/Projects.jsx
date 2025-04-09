import { Link } from 'react-router-dom';
// Import image assets
// Favicons
import linuxDroidFavicon from '../assets/png/Kali.png';
import techShopFavicon from '../assets/png/reactlogo.png';
import androFavicon from '../assets/png/andro.png';
import exifFavicon from '../assets/png/exif.png';
import wifiFavicon from '../assets/png/wifi.png';
import rdpFavicon from '../assets/png/rdp5.png';

// Project images
import linuxDroidImage from '../assets/webp/linuxdroidlogo.webp';
import techShopImage from '../assets/webp/techshop.webp';
import androImage from '../assets/webp/3.webp';
import exifImage from '../assets/webp/exiff.webp';
import wifiImage from '../assets/webp/wifiB.png';
import rdpImage from '../assets/webp/rdpbanner.jpg';

// Icons
import githubIcon from '../assets/png/githublogo.png';

const projectsData = [
  {
    id: 1,
    title: "LinuxDroid",
    favicon: linuxDroidFavicon,
    description: "The most powerful security toolkit for Android: without rooting your device. Run security tools like Nmap, Metasploit, and Wireshark on your Android device without voiding your warranty. Access a wide range of penetration testing tools and utilities, right from your Android phone or tablet.",
    image: linuxDroidImage,
    github: "https://github.com/aryanvbw/LinuxDroid",
    liveLink: "https://aryanvbw.github.io/LinuxDroid",
    liveLinkText: "Overview"
  },
  {
    id: 2,
    title: "TEch-Shop",
    favicon: techShopFavicon,
    description: "TEch-Shop is an ecommerce website built on wordpress. Your One-Stop Shop for Cyber and Tech Tools!",
    image: techShopImage,
    liveLink: "https://aryanvbw.github.io",
    liveLinkText: "Live view"
  },
  {
    id: 3,
    title: "ANDRO",
    favicon: androFavicon,
    faviconClass: "ANDRO",
    description: "ANDRO Unleash Mobile Security with our Android Exploitation and Analysis Tool. Identify vulnerabilities, reverse engineer apps, and fortify defenses with ease. Stay ahead of threats and redefine mobile protection today!",
    image: androImage,
    github: "https://github.com/AryanVBW/ANDRO",
    liveLink: "https://aryanvbw.github.io/ANDRO",
    liveLinkText: "Overview"
  },
  {
    id: 4,
    title: "Exif",
    favicon: exifFavicon,
    description: "ExifTool is a powerful command-line tool that can be used to extract and edit metadata in a wide range of media files, including images, audio, and video. Metadata is information that is stored within a file that describes the file's content or other attributes.",
    image: exifImage,
    github: "https://github.com/aryanVBW/Exif",
    liveLink: "https://aryanvbw.github.io/Exif",
    liveLinkText: "Overview"
  },
  {
    id: 5,
    title: "WIFIjam",
    favicon: wifiFavicon,
    description: "Python WiFi Deauthentication Script! Ready to take control of WiFi networks like a pro? Introducing our Python-based WiFi Deauthentication Script—the ultimate tool for network dominance. Explore vulnerabilities, disconnect devices, and fortify your security.",
    image: wifiImage,
    github: "https://github.com/arynavbw/WIFIjam",
    liveLink: "https://aryanvbw.github.io/WIFIjam/",
    liveLinkText: "Overview"
  },
  {
    id: 6,
    title: "RDPtown",
    favicon: rdpFavicon,
    description: "Welcome to the magical world of Linxie – your free Linux Remote Desktop (RDP) and virtual computer ! 🎉 These cloud computers are fully managed by Google, so you can be sure they are reliable and secure. You can use them for anything you want.",
    image: rdpImage,
    github: "https://github.com/AryanVBW/RDPtown",
    liveLink: "https://aryanvbw.github.io/RDPtown/",
    liveLinkText: "Overview"
  }
];

function ProjectCard({ project }) {
  return (
    <div className="project-box-wrapper" data-aos="fade-up" data-aos-duration="800">
      <div className="project-box hover-glow" id={`project-box${project.id}`}>
        <div className="info-div">
          <img 
            src={project.favicon} 
            alt={`${project.title} website favicon`} 
            className={`faviconforProject ${project.faviconClass || ''}`} 
          />
          <article className="ProjectHeading scroll-animate">{project.title}</article>
          <p className="ProjectDescription scroll-animate from-right scroll-delay-2">
            {project.description}
          </p>
          <div className="project-buttons">
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className="github-redirect hover-lift" aria-label={`Visit ${project.title} on GitHub`}>
                <img src={githubIcon} alt="github redirect button" />
              </a>
            )}
            <a href={project.liveLink} target="_blank" rel="noreferrer" className="cta" aria-label={`Visit ${project.title} ${project.liveLinkText}`}>
              <span>{project.liveLinkText}</span>
              <svg viewBox="0 0 13 10" height="10px" width="15px">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
              </svg>
            </a>
          </div>
        </div>
        <div className="image-div">
          <img src={project.image} alt={`${project.title} website preview image`} />
        </div>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section className="projects-section-container" id="projects">
      <div className="projects-section-div">
        <div className="section-heading" data-aos="fade-up" data-aos-duration="800">
          <h2 className="section-heading-article scroll-animate">
            &#60;/Projects&#62;
          </h2>
          <p className="sectionHeadingP"></p>
        </div>
        <div className="project-boxes-div">
          {projectsData.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects; 