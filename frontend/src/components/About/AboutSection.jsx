import './AboutSection.css';

function AboutSection() {
  return (
    <section id="about" className="about-section">
      <h2 className="section-title">ABOUT ME</h2>
      <div className="about-container">
        
        
        <div className="about-content">
          <div className="about-photos">
            <div className="photo-stack">
              <div className="photo photo-1"></div>
              <div className="photo photo1-border"></div>
              <div className="photo photo-2"></div>
              <div className="photo photo2-border"></div>
            </div>
          </div>
          
          <div className="about-text">
            <div className="speech-bubble">
              <div className="bubble-header">MEET THE COOK!</div>
              <div className="bubble-content">
                <p>Born in the wrong decade, I spend my time cooking up websites that feel fresh out of the oven. My stack? MERN, vanilla CSS, and a splash of hand-coded love.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
