import Swal from 'sweetalert2'
const Contact = () => {

  const onSubmit = async (event) => {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success"
      });
  };
  return (
    <section className="contact" data-page="contact">
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>

      <section className="mapbox" data-mapbox>
        <figure>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56620.38354504514!2d83.40134648443366!3d27.507404081952483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39969a3fd7ca84d9%3A0xbca4fda146716c6f!2sSiddharthanagar%2C%20Nepal!5e0!3m2!1sen!2sin!4v1720704312990!5m2!1sen!2sin"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </figure>
      </section>

      <section className="contact-form">
        <h3 className="h3 form-title">Contact Form</h3>

        <form
          action="https://formspree.io/f/xwpeoozq"
          method="POST"
          className="form"
          onSubmit={onSubmit}
        >
          <div className="input-wrapper">
            <input
              type="text"
              name="fullname"
              className="form-input"
              placeholder="Full name"
            />

            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Email address"
            />
          </div>

          <textarea
            name="message"
            className="form-input"
            placeholder="Your Message"
          ></textarea>

          <button className="form-btn" type="submit" data-form-btn>
            <ion-icon name="paper-plane"></ion-icon>
            <span>Send Message</span>
          </button>
        </form>
      </section>
    </section>
  );
};

export default Contact;
