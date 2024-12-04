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
            description="During my internship at Unicom Portal as a Front-End Developer, I built a front-end website,
            which helped me improve my skills in front-end technologies and gain valuable knowledge."
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
          <SkillItem title="Java" value={70}  />
          <SkillItem title="Html & Css" value={95} />
          <SkillItem title="Javascript" value={90} />
          <SkillItem title="React Js" value={85} />
          <SkillItem title="MongoDB" value={90} />
          <SkillItem title="MySql" value={70} />
          <SkillItem title="Node Js" value={80} />
          <SkillItem title="AWS" value={60} />
        </ul>
      </div>
    </section>
  );
};

export default Resume;
