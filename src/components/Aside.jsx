import {
  FaGithub,
  FaLinkedinIn,
  FaPhoneAlt,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GiClawSlashes, GiMailbox } from "react-icons/gi";

const Aside = () => {
  const handleSidebarClick = () => {
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("active");
  };
  return (
    <aside className="sidebar">
      <div className="sidebar-info ">
        <figure className="avatar-box">
          <img src={"/images/rjb.png"} alt="Rajeev Baniya" width="80" />
        </figure>

        <div className="info-content">
          <h1 className="name" title=" Rajeev Baniya">
            Rajeev Baniya
          </h1>
          <p className="title">Full Stack Developer</p>
        </div>

        <button
          className="info_more-btn data-sidebar-btn "
          onClick={handleSidebarClick}
        >
          <span>Show Contacts</span>

          <GiClawSlashes />
        </button>
      </div>
      <div className="sidebar-info_more">
        <div className="separator"></div>
        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box pt-6">
              <GiMailbox />
            </div>

            <div className="contact-info">
              <p className="contact-title">Email</p>

              <a
                href="mailto:rjbaniya.contact@gmail.com"
                className="contact-link"
              >
                rjbaniya.contact@gmail.com
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              {/*               <FaWhatsapp /> */}
              <FaPhoneAlt />
            </div>

            <div className="contact-info">
              <p className="contact-title">Phone</p>
              <a href="tel:+917275966908" className="contact-link">
                +91 7275966908
              </a>

              <a href="tel:+9779819460850" className="contact-link contact-link-primary">
                +977 9819460850
              </a>
            </div>
          </li>
        </ul>

        <div className="separator"></div>
        <ul className="social-list">
          <li className="social-item">
            <a href="https://x.com/rajeev_rjb" className="social-link">
              <ion-icon name="logo-twitter">
                <FaXTwitter />
              </ion-icon>
            </a>
          </li>

          <li className="social-item">
            <a
              href="https://www.linkedin.com/in/rajeev-baniya-9298b82ba/"
              className="social-link"
            >
              <ion-icon name="logo-linkedin">
                <FaLinkedinIn />
              </ion-icon>
            </a>
          </li>
          <li className="social-item">
            <a href="https://github.com/RajeevBaniya" className="social-link">
              <ion-icon name="logo-github">
                <FaGithub />
              </ion-icon>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Aside;
