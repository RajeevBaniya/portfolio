/* eslint-disable react/no-unescaped-entities */

import { useEffect, useState } from "react";
import Service from "./Service";
import TechStack from "./TechStack";

const servicesData = [
  {
    icon: "/images/icon-dev.svg",
    title: "Frontend Development",
    description:
      "Experience with building responsive interfaces using modern frameworks, handling state, UI logic and integrating APIs",
  },
  {
    icon: "/images/icon-dev.svg",
    title: "Backend Development",
    description:
      "Experience with API design, data handling and backend logic using databases and server-side frameworks",
  },
  {
    icon: "/images/icon-dev.svg",
    title: "Cloud Platforms",
    description:
      "Familiar with deploying and managing applications using cloud platforms and related developer tools",
  },
  {
    icon: "/images/icon-dev.svg",
    title: "AI Tools & Integration",
    description:
      "Familiar with using AI tools for development, debugging and improving workflows along with integrating AI APIs into applications",
  },
];

const About = () => {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    fetch("testimonials.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTestimonials(data);
      });
  }, []);
  return (
    <article className="about  active" data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        <p>Hello ! I'm Rajeev Baniya.</p>

        <p>
          Skilled in developing responsive applications, optimizing performance
          and creating secure authentication systems. Familiar with AI tools and
          cloud services, while exploring and staying updated with the latest
          technology. I love solving problems, picks up new tech fast, learn
          from every challenges and stays curious about what's next in the
          industry & This is my official portfolio website to showcase all my
          details and work.
        </p>
        <div class="btn-box">
          <a href="images/resume.pdf" target="_blank" class="btn d-CV">
            DOWNLOAD <i class="bx bx-download"></i>
          </a>
        </div>
      </section>

      {/* <!--
      - service
    --> */}

      <section className="service">
        <h3 className="h3 service-title">What i do</h3>

        <ul className="service-list">
          {servicesData.map((service, index) => (
            <Service
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </ul>
      </section>
      <TechStack />
    </article>
  );
};

export default About;
