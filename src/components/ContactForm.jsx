// src/components/ContactForm.jsx
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import './ContactForm.css'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ submitting: true, submitted: false, error: null })

    try {
      // Using @emailjs/browser SDK
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'buddhilalakshan12@gmail.com',
        reply_to: formData.email
      }

      await emailjs.send(serviceId, templateId, templateParams, publicKey)

      setStatus({ submitting: false, submitted: true, error: null })
      setFormData({ name: '', email: '', subject: '', message: '' })

      // Reset form after 5 seconds
      setTimeout(() => {
        setStatus({ submitting: false, submitted: false, error: null })
      }, 5000)
    } catch (error) {
      setStatus({ submitting: false, submitted: false, error: 'Failed to send message. Please try again.' })
    }
  }

  return (
    <div className="contact-form-container">
      <h3 className="form-title">Send Me a Message</h3>

      {status.submitted ? (
        <div className="success-message">
          <div className="success-icon">✓</div>
          <p>Thank you! Your message has been sent successfully.</p>
          <p>I'll get back to you as soon as possible.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="form-input"
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="form-input"
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              required
              className="form-input"
            />
          </div>

          <div className="form-group">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="5"
              required
              className="form-textarea"
            />
          </div>

          <button
            type="submit"
            disabled={status.submitting}
            className="submit-btn"
          >
            {status.submitting ? (
              <>
                <span className="spinner"></span>
                Sending...
              </>
            ) : 'Send Message'}
          </button>

          {status.error && (
            <div className="error-message">
              {status.error}
            </div>
          )}
        </form>
      )}
    </div>
  )
}

export default ContactForm