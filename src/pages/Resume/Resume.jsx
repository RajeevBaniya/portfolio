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

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaBookReader />
          </div>
          <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="JAIN DEEMED-TO-BE UNIVERSITY"
            date="2021 - 2025&nbsp;&nbsp; BENGALURU - PRESENT "
            description="BACHELOR OF ENGINEERING IN COMPUTER SCIENCE."
          />
          <TimelineItem
            title="TILOTTAMA CAMPUS"
            date="2019 - 2020"
            description="STUDIED SCIENCE - SECONDARY SCHOOL"
          />
          <TimelineItem
            title="AMAR JYOTI ENGLISH MEDIUM SCHOOL"
            date="PASSED OUT AT 2018"
            description="10TH"
          />
        </ol>
      </div>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaRegBookmark />
          </div>
          <h3 className="h3">Experience</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="FRONT-END DEVELOPER INTERNSHIP"
            date="UNICOM PORTAL"
            description="During my internship, I collaborated with the team to build a secure login system and manage user data effectively.
            I also contributed to designing and improving a responsive web application, focusing on better performance across different devices.
            Additionally, I worked on reducing page load times and implementing basic accessibility features to enhance the overall user experience."
          />
        </ol>
      </div>

      <div className="timeline">
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
