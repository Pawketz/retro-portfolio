import { useState, useCallback } from 'react';
import './ContactSection.css';

function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [submitStatus, setSubmitStatus] = useState({
    isSubmitting: false,
    message: '',
    type: '' // 'success' or 'error'
  });

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear status message when user starts typing
    if (submitStatus.message) {
      setSubmitStatus(prev => ({ ...prev, message: '', type: '' }));
    }
  }, [submitStatus.message]);

  const resetForm = useCallback(() => {
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  }, []);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    
    // Prevent multiple submissions
    if (submitStatus.isSubmitting) return;
    
    setSubmitStatus({
      isSubmitting: true,
      message: 'Sending message...',
      type: 'info'
    });

    try {
      const response = await fetch('/api/contact/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          returnEmail: formData.email,
          subject: `Message from ${formData.name}`,
          messageBody: formData.message
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus({
          isSubmitting: false,
          message: 'Message sent successfully! I\'ll get back to you soon.',
          type: 'success'
        });
        resetForm();
      } else {
        throw new Error(data.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus({
        isSubmitting: false,
        message: error.message || 'Failed to send message. Please try again.',
        type: 'error'
      });
    }
  }, [formData, submitStatus.isSubmitting, resetForm]);

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
                disabled={submitStatus.isSubmitting}
                minLength="2"
                maxLength="100"
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
                disabled={submitStatus.isSubmitting}
                maxLength="255"
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
                disabled={submitStatus.isSubmitting}
                minLength="10"
                maxLength="1000"
                placeholder="Tell me about your project or just say hi!"
              ></textarea>
            </div>
            
            {submitStatus.message && (
              <div className={`form-status ${submitStatus.type}`}>
                {submitStatus.message}
              </div>
            )}
            
            <button 
              type="submit" 
              className={`submit-btn ${submitStatus.isSubmitting ? 'submitting' : ''}`}
              disabled={submitStatus.isSubmitting}
            >
              {submitStatus.isSubmitting ? 'SENDING...' : 'SEND IT!'}
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
