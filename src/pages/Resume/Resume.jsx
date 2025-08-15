import React from "react";
import { FaBookReader, FaLanguage, FaRegBookmark } from "react-icons/fa";
import TimelineItem from "./TimelineItem";
import SkillItem from "./SkillItem";

const Resume = () => {
  return (
    <section>
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <div className="timeline resume-section">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaBookReader />
          </div>
          <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="JAIN UNIVERSITY"
            date="2021 - 2025  BANGALORE, IN"
            description="BACHELOR OF TECHNOLOGY IN COMPUTER SCIENCE AND ENGINEERING."
          />
        </ol>
      </div>

      <div className="timeline resume-section">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaRegBookmark />
          </div>
          <h3 className="h3">Experience</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="FRONT-END DEVELOPER INTERN"
            date="UNICOM PORTAL"
            descriptions={[
              "Implemented secure user authentication, improving account safety and reduced login-related errors.",
              "Optimized front-end performance reducing page load times by 30% for better user experience.",
              "Developed responsive mobile-friendly designs increasing accessibility across devices. ",
            ]}
          />
        </ol>
      </div>

      <div className="timeline resume-section">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaRegBookmark />
          </div>
          <h3 className="h3">Courses & Certifications</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem title="Full-Stack Web Development Course" />
          <TimelineItem title="React.js Course" />
          <TimelineItem title="AWS Certified Solutions Architect - Coursera" />
        </ol>
      </div>

      <div className="skill">
        <h3 className="h3 skills-title">Technical Skills</h3>
        <ul className="skills-list content-card">
          <SkillItem title="Java" value={75} />
          <SkillItem title="Python" value={75} />
          <SkillItem title="Html & Css" value={98} />
          <SkillItem title="Javascript" value={94} />
          <SkillItem title="React Js" value={90} />
          <SkillItem title="TailwindCss" value={90} />
          <SkillItem title="MongoDB" value={90} />
          <SkillItem title="Node Js" value={90} />
          <SkillItem title="Express Js" value={90} />
          <SkillItem title="SQL(MySql)" value={75} />
          <SkillItem title="Docker" value={70} />
          <SkillItem title="Amazon AWS & Google Cloud Platform" value={75} />
        </ul>
      </div>
    </section>
  );
};

export default Resume;
