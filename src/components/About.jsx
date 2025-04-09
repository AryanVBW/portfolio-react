import React from 'react';
import vivekImage from '../assets/png/footer-avatar-vivek.png';

function About() {
  return (
    <section className="about-section-container" id="about" data-aos="fade-up">
      <div className="about-section">
        <div className="section-heading">
          <h2 className="section-heading-article" tabIndex="0" aria-label="About me heading">
            &#60;/AboutMe&#62;
          </h2>
          <p className="sectionHeadingP"></p>
        </div>

        <div className="info-dp-section">
          <div className="about-info">
            <p tabIndex="0">
              A Visionary in Code: Unleashing Digital Potential"

              My passion for technology transcends mere interest; it's a relentless drive that propels me forward. Initially drawn to the world of digital concept arts, I found my true calling in web development. The transition was not just a change in focus—it was a leap into a realm where creativity meets logic, resulting in a symphony of design and functionality.
            </p>
            <br />
            <p tabIndex="0">
              Crafting the Web: A Canvas for Innovation"

The web is my canvas, and my tools are the languages and frameworks that bring life to ideas. I revel in the process of building from scratch, of meticulously piecing together lines of code to construct interactive experiences and creative tools that resonate with users. It's a craft that demands both precision and imagination, and I dedicate myself to mastering it every day.
            </p>
            <br />
            <p tabIndex="0">
           
            </p>
           
            <a href="#" className="resume-btn" id="resume-btn" target="_blank" download="vivek-resume.pdf">
              <div className="sign">
                <svg viewBox="0 0 640 512">
                  <path
                    d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-167l80 80c9.4 9.4 24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-39 39V184c0-13.3-10.7-24-24-24s-24 10.7-24 24V318.1l-39-39c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9z" />
                </svg>
              </div>
              <div className="text">Resume</div>
            </a>
          </div>

          <div className="dp" data-aos="fade-up">
            <img src={vivekImage} alt="Vivek W" tabIndex="0" aria-label="image of vivek" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About; 