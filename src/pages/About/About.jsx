/* eslint-disable react/no-unescaped-entities */

import { useEffect, useState } from "react";
import Service from "./Service";
import TechStack from "./TechStack";

const servicesData = [
  {
    icon: "/images/icon-dev.svg",
    title: "Software Development",
    description:
      "I build projects with a focus on writing clear code and gradually improving performance.",
  },
  {
    icon: "/images/icon-dev.svg",
    title: "Cloud Platforms",
    description: "I use cloud tools and have basic experience for deploying and managing applications.",
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
          Skilled in developing responsive web applications, optimizing performance
          and creating secure authentication systems. Familiar with AI tools and cloud
          services, while exploring and staying updated with the latest technology &
          This is my official portfolio website to showcase all my details and work.
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
