import { useState } from 'react';
import './ProjectsSection.css';

function ProjectsSection() {
  const [currentProject, setCurrentProject] = useState(0);
  
  // Placeholder projects data
  const projects = [
    {
      id: 1,
      title: "Pawketz Packs",
      tech: "REACT!",
      description: "a full-stack web application for collecting and battling digital cards with real-time multiplayer gameplay.",
      demoLink: "https://www.pawketz.com",
      codeLink: "#"
    },
    {
      id: 2,
      title: "Stream Thing",
      tech: "TYPESCRIPT & WEBSOCKET!",
      description: "OBS Studio Hardware Controller for DeskThing",
      demoLink: "#",
      codeLink: "https://github.com/Pawketz/Stream-Thing"
    },
    {
      id: 3,
      title: "Live Cap",
      tech: "WEB SPEECH API!",
      description: "A real-time speech-to-text captioning application for streaming with OBS Studio.",
      demoLink: "https://livecap.onrender.com/",
      codeLink: "https://github.com/Pawketz/liveCap"
    }
  ];

  const handleDemoClick = () => {
    const demoLink = projects[currentProject].demoLink;
    if (demoLink && demoLink !== "#") {
      window.open(demoLink, '_blank', 'noopener,noreferrer');
    }
  };

  const handleCodeClick = () => {
    const codeLink = projects[currentProject].codeLink;
    if (codeLink && codeLink !== "#") {
      window.open(codeLink, '_blank', 'noopener,noreferrer');
    }
  };

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">PROJECTS</h2>
      <div className="projects-container">
        
        
        <div className="project-showcase">
          <button className="nav-arrow nav-arrow-left" onClick={prevProject} aria-label="Previous project">
            <svg className="arrow-icon" viewBox="0 0 87.34 171.12" aria-hidden="true">
              <path d="M74.21,165.48c-1.83,0-3.56-.8-4.75-2.21L7.8,90.92c-2.8-3.28-2.77-8.21.07-11.46L70.49,7.76c1.19-1.37,2.91-2.15,4.71-2.15,1.95,0,3.83.93,5.01,2.48,1.19,1.55,1.57,3.54,1.05,5.44l-.05.18-19.72,62.77c-1.25,4.16.35,17.02,2.03,22.86l16.77,58.28c.49,1.9.09,3.86-1.1,5.4-1.19,1.53-3.05,2.45-4.99,2.45Z" fill="var(--primary-red)"/>
              <path d="M75.2,10.61c.76,0,1.49.7,1.24,1.61l-19.72,62.77c-1.74,5.79.33,19.93,2,25.74l16.73,58.15c.23.9-.49,1.59-1.25,1.59-.34,0-.68-.14-.95-.45L11.61,87.68c-1.21-1.42-1.2-3.52.03-4.93L74.26,11.05c.27-.31.61-.44.94-.44m0-10c-3.24,0-6.33,1.41-8.47,3.86L4.1,76.17c-4.46,5.1-4.5,12.84-.11,17.99l61.65,72.35c2.15,2.52,5.27,3.97,8.56,3.97,3.47,0,6.82-1.64,8.94-4.39,2.14-2.77,2.87-6.3,1.99-9.71l-.03-.13-.04-.13-16.73-58.15c-1.69-5.89-2.83-17.12-2.04-20.08l19.68-62.67.06-.18.05-.18c.93-3.42.24-6.99-1.9-9.79-2.13-2.78-5.49-4.45-8.99-4.45Z" fill="currentColor"/>
            </svg>
          </button>
          
          <div className="project-card">
            <div className="project-content-row">
              <div className="project-tv">
                <svg id="projectTelevision" data-name="Project Television" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 841 664.51">
                  <rect
                    id="tvBackground"
                    x="70"
                    y="30"
                    width="690"
                    height="500"
                    rx="40"
                    fill="var(--primary-yellow)"
    
                  />
          
                  <g id="legs">
                    <path d="M159.14,540.32s-36.03,89.82-42.97,96.77c-2.98,2.98-16.09,5.75-16.8-1.13-1.13-10.99,21.65-100.81,21.65-100.81l38.13,5.17Z" stroke="#000" stroke-miterlimit="10" stroke-width="6"/>
                    <path d="M198.72,543.07s-9.92,59.98-6.14,64.62c4.68,5.75,13.85,1.65,15.35,1.29,4.69-1.13,21.97-65.91,21.97-65.91h-31.18Z" stroke="#000" stroke-miterlimit="10" stroke-width="6"/>
                    <path d="M665.93,653.41c3.11,2.95,17.22,8.22,21.32,0,1.78-3.55-11.05-113.02-11.05-113.02l-43.88,2.84s27.3,104.2,33.6,110.18Z" stroke="#000" stroke-miterlimit="10" stroke-width="6"/>
                    <path d="M760.76,615.12c-2.24,7.36-13.94,5.12-16.16,3.72l-48.95-96.93,39.9-12.87s29.08,93.32,25.2,106.08Z" stroke="#000" stroke-miterlimit="10" stroke-width="6"/>
                  </g>
                  <path d="M789.59,74.65C769.22-23.67,128.44-7.35,86.27,31.25c-52.26,47.83-46.2,465.04-4.43,497.81,40.44,31.73,651.13,65.14,698.89-23.03,23.03-42.52,34.49-307.66,8.86-431.38ZM630.39,490.26c-50.02,31.26-169.96,13.64-293.87,15.35-20.43.28-165.98-7.39-195.54-14.21-9.97-2.3-19.34-6.98-28.94-23.74,0,0-14.83-37.65-15.76-86.99,0-.34.03-.44.03-.66h0c-3.65-40.95-3.81-139.95-1.77-164.41,1.54-18.49-.74-113.09,31.59-142.72,22.54-20.66,71.79-21.9,71.79-21.9,10.21-.24,57.88-2.69,76.37-3.56,14.75-.69,111.96.35,140.32,2.33,14.39,1,136.04,2.46,176.67,10.47,32.24,6.35,58.62,15.78,68.1,35.69,15.77,33.14,14.21,109,15.35,180.06,1.85,115.42-8.87,192.13-44.34,214.3Z" fill="#2d7569" stroke="#000" stroke-miterlimit="10" stroke-width="6"/>
                  <path id="tvScreen" d="M126.13,72.88c22.54-20.66,71.79-21.9,71.79-21.9,10.21-.24,57.88-2.69,76.37-3.56,14.75-.69,111.96.35,140.32,2.33,14.39,1,136.04,2.46,176.67,10.46,32.24,6.35,58.62,15.78,68.1,35.69,15.77,33.14,14.21,109,15.35,180.06,1.85,115.42-8.87,192.13-44.34,214.3-50.02,31.26-169.96,13.64-293.87,15.35-20.43.28-165.98-7.39-195.54-14.21-9.97-2.3-19.34-6.98-28.94-23.74,0,0-14.83-37.65-15.76-86.99,0-.34.03-.44.03-.66h0c-3.65-40.95-3.81-139.95-1.77-164.41,1.54-18.49-.74-113.09,31.59-142.72Z" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="6"/>
                  <path id="tvSide" d="M618.14,12.31s85.47,22.17,95.82,46.73c28.28,67.11,22.74,445.71-11.38,466.47-19.15,11.65-84.44,30.22-84.44,30.22l89.48-13.35,57.47-20.97,16.89-14.66,12.12-58.1,6.67-70.52,3.41-124.51-5.09-110.86-11.13-76-17.32-16.98-70.23-25.32-82.26-12.15Z"/>
                  <g id="bottomKnob">
                    <circle cx="700" cy="402" r="18.72" stroke="#7a7473" stroke-miterlimit="10" stroke-width="2"/>
                    <rect x="696.76" y="387.32" width="6.48" height="29.36" rx="1" ry="1" transform="translate(1102 -298) rotate(90)" stroke="#7a7473" stroke-miterlimit="10" stroke-width="2"/>
                  </g>
                  <g id="topKnob">
                    <circle cx="703" cy="352" r="18.72" stroke="#7a7473" stroke-miterlimit="10" stroke-width="2"/>
                    <rect x="700" y="337.32" width="6.48" height="29.36" rx="1" ry="1" transform="translate(454.88 -394.17) rotate(45)" stroke="#7a7473" stroke-miterlimit="10" stroke-width="2"/>
                  </g>
                  <g id="grill">
                    <g>
                      <rect x="684.28" y="261" width="37.44" height="5.01" rx="1.9" ry="1.9"/>
                      <rect x="684.28" y="254" width="37.44" height="5.01" rx="1.9" ry="1.9"/>
                      <rect x="684.28" y="247" width="37.44" height="5.01" rx="1.9" ry="1.9"/>
                      <rect x="684.28" y="240" width="37.44" height="5.01" rx="1.9" ry="1.9"/>
                      <rect x="684.28" y="233" width="37.44" height="5.01" rx="1.9" ry="1.9"/>
                      <rect x="684.28" y="226" width="37.44" height="5.01" rx="1.9" ry="1.9"/>
                      <rect x="684.28" y="219" width="37.44" height="5.01" rx="1.9" ry="1.9"/>
                    </g>
                    <g>
                      <rect x="684.28" y="212" width="37.44" height="5.01" rx="1.9" ry="1.9"/>
                      <rect x="684.28" y="205" width="37.44" height="5.01" rx="1.9" ry="1.9"/>
                      <rect x="684.28" y="198" width="37.44" height="5.01" rx="1.9" ry="1.9"/>
                      <rect x="684.28" y="191" width="37.44" height="5.01" rx="1.9" ry="1.9"/>
                      <rect x="684.28" y="184" width="37.44" height="5.01" rx="1.9" ry="1.9"/>
                      <rect x="684.28" y="177" width="37.44" height="5.01" rx="1.9" ry="1.9"/>
                      <rect x="684.28" y="170" width="37.44" height="5.01" rx="1.9" ry="1.9"/>
                    </g>
                  </g>
                </svg>
              </div>
              
              <div className="project-info">
                <div className="project-title">{projects[currentProject].title}</div>
                <div className="project-tech">
                  <span className="highlightIntro" >BUILT WITH</span> <br/><span className="tech-highlight">{projects[currentProject].tech}</span>
                </div>
                <div className="project-description">
                  {projects[currentProject].description}
                </div>
                

              </div>
            </div>
            <div className="project-buttons">
              <button 
                className={`project-btn demo-btn ${projects[currentProject].demoLink === "#" ? 'disabled' : ''}`}
                onClick={handleDemoClick}
                disabled={projects[currentProject].demoLink === "#"}
              >
                SEE DEMO
              </button>
              <button 
                className={`project-btn code-btn ${projects[currentProject].codeLink === "#" ? 'disabled' : ''}`}
                onClick={handleCodeClick}
                disabled={projects[currentProject].codeLink === "#"}
              >
                GITHUB
              </button>
            </div>
          </div>

          <button className="nav-arrow nav-arrow-right" onClick={nextProject} aria-label="Next project">
            <svg className="arrow-icon right-arrow" viewBox="0 0 87.34 171.12" aria-hidden="true">
              <path d="M74.21,165.48c-1.83,0-3.56-.8-4.75-2.21L7.8,90.92c-2.8-3.28-2.77-8.21.07-11.46L70.49,7.76c1.19-1.37,2.91-2.15,4.71-2.15,1.95,0,3.83.93,5.01,2.48,1.19,1.55,1.57,3.54,1.05,5.44l-.05.18-19.72,62.77c-1.25,4.16.35,17.02,2.03,22.86l16.77,58.28c.49,1.9.09,3.86-1.1,5.4-1.19,1.53-3.05,2.45-4.99,2.45Z" fill="var(--primary-red)"/>
              <path d="M75.2,10.61c.76,0,1.49.7,1.24,1.61l-19.72,62.77c-1.74,5.79.33,19.93,2,25.74l16.73,58.15c.23.9-.49,1.59-1.25,1.59-.34,0-.68-.14-.95-.45L11.61,87.68c-1.21-1.42-1.2-3.52.03-4.93L74.26,11.05c.27-.31.61-.44.94-.44m0-10c-3.24,0-6.33,1.41-8.47,3.86L4.1,76.17c-4.46,5.1-4.5,12.84-.11,17.99l61.65,72.35c2.15,2.52,5.27,3.97,8.56,3.97,3.47,0,6.82-1.64,8.94-4.39,2.14-2.77,2.87-6.3,1.99-9.71l-.03-.13-.04-.13-16.73-58.15c-1.69-5.89-2.83-17.12-2.04-20.08l19.68-62.67.06-.18.05-.18c.93-3.42.24-6.99-1.9-9.79-2.13-2.78-5.49-4.45-8.99-4.45Z" fill="currentColor"/>
            </svg>
          </button>
        </div>
        
        <div className="project-indicators">
          {projects.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentProject ? 'active' : ''}`}
              onClick={() => setCurrentProject(index)}
              aria-label={`View project ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
