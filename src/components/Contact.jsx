// src/components/Contact.jsx
import ContactForm from './ContactForm'
import './Contact.scss'

const Contact = () => {
  const contactInfo = [
    { icon: '📞', label: 'Phone', value: '+94 70 456 1240', href: 'tel:+94704561240' },
    { icon: '✉️', label: 'Email', value: 'buddhilalakshan12@gmail.com', href: 'mailto:buddhilalakshan12@gmail.com' },
    { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/buddhilaherath', href: 'https://linkedin.com/in/buddhilaherath' },
    { icon: '🐙', label: 'GitHub', value: 'github.com/gitbuddhila', href: 'https://github.com/gitbuddhila' },
    { icon: '📍', label: 'Location', value: 'Colombo, Sri Lanka', href: 'https://www.google.com/maps/place/Colombo,+Sri+Lanka' }
  ]


  return (
    <section id="contact" className="contact-section"><div className="contact-header">
      <h2 className="section-title">Get In Touch</h2>
      <p className="section-subtitle">
        Interested in collaborating or have a project in mind? Feel free to reach out!
      </p>
    </div>
      <div className="contact-container">


        <div className="contact-content">
          {/* Left Side - Contact Info */}
          <div className="contact-info">
            {contactInfo.map((item, index) => (
              <div key={index} className="contact-item">
                <div className="contact-icon">{item.icon}</div>
                <div className="contact-details">
                  <span className="contact-label">{item.label}</span>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-value"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="contact-value">{item.value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Contact Form */}
          <div className="contact-form-wrapper">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact