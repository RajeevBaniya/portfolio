import { FaBookReader, FaRegBookmark } from "react-icons/fa";
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
            title="BACHELOR OF TECHNOLOGY IN COMPUTER SCIENCE AND ENGINEERING."
            date="2021 - 2025  BENGALURU, IN"
            description="JAIN UNIVERSITY"
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
            title="SOFTWARE DEVELOPER INTERN"
            company="ECSC GROUP"
            date="12/2024-05/2025"
          />
          <TimelineItem
            title="FRONT-END DEVELOPER INTERN"
            company="UNICOM PORTAL"
            date="07/2023-08/2023"
          />
        </ol>
      </div>

      <div className="skill">
        <h3 className="h3 skills-title">Technical Skills</h3>
        <ul className="skills-list content-card">
          <SkillItem title="Javascript" value={95} />
          <SkillItem title="React Js" value={90} />
          <SkillItem title="TailwindCss" value={90} />
          <SkillItem title="MongoDB" value={95} />
          <SkillItem title="Node Js" value={90} />
          <SkillItem title="Express Js" value={90} />
          <SkillItem title="Python" value={80} />
          <SkillItem title="SQL(MySql)" value={70} />
          <SkillItem title="Html5 & CSS3" value={95} />
          <SkillItem title="Docker" value={75} />
          <SkillItem title="AWS , Firebase" value={70} />
          <SkillItem title="Git & GitHub" value={95} />
        </ul>
      </div>

      <div className="timeline resume-section">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaRegBookmark />
          </div>
          <h3 className="h3">Courses & Certifications</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem title="Full-Stack Web Development" />
          <TimelineItem
            title="Docker Foundations Certificate"
          />
          <TimelineItem
            title="Build Your Generative AI Productivity Skills with Microsoft and LinkedIn"
          />
          <TimelineItem title="React.js" />
          <TimelineItem title="AWS Certified Solutions Architect - (Lenskart) - Coursera" />
        </ol>
      </div>
    </section>
  );
};

export default Resume;
