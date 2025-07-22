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
            title="JAIN DEEMED-TO-BE UNIVERSITY"
            date="2021 - 2025  BENGALURU - PRESENT "
            descriptions={[
              "BACHELOR OF TECHNOLOGY IN COMPUTER SCIENCE AND ENGINEERING.",
              "SPECIALIZATION IN SOFTWARE ENGINEERING.",
            ]}
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
              "Collaborated with the team and implemented secure user authentication.",
              "Developed & maintained responsive web applications achieving 30% improvement in page load times",
              "Built mobile-friendly web application with optimized performance and cross-device compatibility.",
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
          <TimelineItem title="React.js - Coursera" />
          <TimelineItem title="AWS Certified Solutions Architect - Coursera" />
        </ol>
      </div>

      <div className="timeline resume-section">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaLanguage />
          </div>
          <h3 className="h3">Languages Known</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem title="ENGLISH" />
          <TimelineItem title="HINDI" />
          <TimelineItem title="NEPALI" />
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
