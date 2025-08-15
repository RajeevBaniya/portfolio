import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { sendEmail } from "../../utils/emailService";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize EmailJS with your public key
  useEffect(() => {
    // Only initialize in production mode to avoid errors in development
    if (!import.meta.env.DEV) {
      emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    
    try {
      const { fullname, email, message } = formData;
      const result = await sendEmail(fullname, email, message);
      
      if (result.success) {
        Swal.fire({
          title: "Success!",
          text: "Message sent successfully!",
          icon: "success",
        });
        // Clear form
        setFormData({ fullname: "", email: "", message: "" });
      } else {
        throw new Error(result.error || "Failed to send message");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      Swal.fire({
        title: "Error!",
        text: "Failed to send message. Please try again later.",
        icon: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact" data-page="contact">
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>

      <section className="mapbox" data-mapbox>
        <figure>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.90089923568!2d77.46612624848429!3d12.953945614209816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1753280232945!5m2!1sen!2sin"
            width="600"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </figure>
      </section>

      <section className="contact-form">
        <h3 className="h3 form-title">Contact Form</h3>

        <form
          className="form"
          onSubmit={onSubmit}
        >
          <div className="input-wrapper">
            <input
              type="text"
              name="fullname"
              className="form-input"
              placeholder="Full name"
              value={formData.fullname}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <textarea
            name="message"
            className="form-input"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button 
            className="form-btn" 
            type="submit" 
            data-form-btn
            disabled={isSubmitting}
          >
            <ion-icon name="paper-plane"></ion-icon>
            <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
          </button>
        </form>
      </section>
    </section>
  );
};

export default Contact;