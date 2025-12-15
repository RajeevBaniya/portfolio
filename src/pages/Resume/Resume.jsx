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
            title="SOFTWARE DEVELOPER INTERN"
            company="ECSC GROUP"
            date="12/2024-05/2025"
          />
        </ol>
        <br />
        <ol className="timeline-list">
          <TimelineItem
            title="FRONT-END DEVELOPER INTERN"
            company="UNICOM PORTAL"
            date="07/2023-08/2023"
            // descriptions={[
            //   "Created login and signup form with proper form validation and error handling.",
            //   "Improved frontend performance using lazy loading and pagination reducing page load time by 30%",
            //   "Collaborated with the team to test and fix Ui issues ensuring smooth user experience",
            // ]}
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
          <TimelineItem title="Full-Stack Web Development" />
          <TimelineItem title="React.js" />
          <TimelineItem 
            title="Docker"
            descriptions={[
              "Containerization",
              "Docker Products"
            ]}
          />
          <TimelineItem 
            title="Build Your Generative AI Productivity Skills with Microsoft and LinkedIn"
            descriptions={[
              "AI Productivity",
              "Generative AI", 
              "Artificial Intelligence for Business",
              "Productivity Improvement",
              "Prompt Engineering"
            ]}
          />
          <TimelineItem title="AWS Certified Solutions Architect - (Lenskart) - Coursera" />
        </ol>
      </div>

      <div className="skill">
        <h3 className="h3 skills-title">Technical Skills</h3>
        <ul className="skills-list content-card">
          <SkillItem title="Python" value={70} />
          <SkillItem title="Java" value={50} />
          <SkillItem title="Html5 & CSS3" value={95} />
          <SkillItem title="Javascript" value={95} />
          <SkillItem title="React Js" value={90} />
          <SkillItem title="TailwindCss" value={90} />
          <SkillItem title="MongoDB" value={95} />
          <SkillItem title="Node Js" value={90} />
          <SkillItem title="Express Js" value={90} />
          <SkillItem title="SQL(MySql)" value={65} />
          <SkillItem title="Docker" value={75} />
          <SkillItem title="AWS , Firebase"value={65} />
          <SkillItem title="Git & GitHub" value={95} />
        </ul>
      </div>
    </section>
  );
};

export default Resume;
