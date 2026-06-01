/* eslint-disable react/no-unescaped-entities */

import { useEffect, useState } from "react";
import Service from "./Service";
import TechStack from "./TechStack";

const servicesData = [
  {
    icon: "/images/icon-dev.svg",
    title: "Frontend Development",
    description:
      "Building responsive, performant interfaces with focus on state management, reusable components and seamless API integration.",
  },
  {
    icon: "/images/icon-dev.svg",
    title: "Backend Development",
    description:
      "Designing and building REST APIs, handling authentication, optimizing database queries and structuring clean server-side logic.",
  },
  {
    icon: "/images/icon-dev.svg",
    title: "Cloud & DevOps",
    description:
      "Deploying and managing applications on cloud platforms, handling environment configuration and ensuring smooth deployments.",
  },
  {
    icon: "/images/icon-dev.svg",
    title: "AI Tools & Integration",
    description:
      "Building AI-powered workflows and integrating LLM APIs into applications while using AI tools to accelerate development and debugging.",
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
          Skilled in building full-stack and real-time applications with a
          strong focus on backend systems, API desig, and performance
          optimization actively exploring LLMs, AI-powered workflows and
          cloud-native technologies.
        </p>
        {/* <div class="btn-box">
          <a href="images/resume.pdf" target="_blank" class="btn d-CV">
            DOWNLOAD <i class="bx bx-download"></i>
          </a>
        </div> */}
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
