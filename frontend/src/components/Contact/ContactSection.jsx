import { useState } from 'react';
import './ContactSection.css';

function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-card">
          <h2 className="contact-title">CONTACT</h2>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">NAME:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="form-input"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email" className="form-label">EMAIL:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="form-input"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message" className="form-label">MESSAGE:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="form-textarea"
                rows="5"
                required
              ></textarea>
            </div>
            
            <button type="submit" className="submit-btn">
              SEND IT!
            </button>
          </form>
          
          <div className="contact-decorations">
            <div className="stamp">SEND IT!</div>
            <div className="handwritten-text">WRITE ME A LINE!</div>
            <div className="decorative-stars">
              {/* Decorative star elements */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
