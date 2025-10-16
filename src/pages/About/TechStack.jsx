import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaDocker,
  FaGitAlt,
  FaLinux,
  FaJava,
} from "react-icons/fa";
import {
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiPostman,
  SiExpress,
  SiJavascript,
  SiFirebase,
} from "react-icons/si";

const techs = [
  { name: "JavaScript", icon: <SiJavascript color="#f7df1e" /> },
  { name: "Java", icon: <FaJava color="#e76f00" /> },
  { name: "MongoDB", icon: <SiMongodb color="#47a248" /> },
  { name: "Express", icon: <SiExpress color="#fff" /> },
  { name: "React", icon: <FaReact color="#61dafb" /> },
  { name: "Node.js", icon: <FaNodeJs color="#3c873a" /> },
  { name: "MySQL", icon: <SiMysql color="#00758f" /> },
  { name: "AWS", icon: <FaAws color="#ff9900" /> },
  { name: "Firebase", icon: <SiFirebase color="#ffcb2b" /> },
  { name: "Docker", icon: <FaDocker color="#2496ed" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss color="#38bdf8" /> },
  { name: "Git & GitHub", icon: <FaGitAlt color="#f34f29" /> },
  { name: "Postman", icon: <SiPostman color="#ff6c37" /> },
  { name: "Linux", icon: <FaLinux color="#fff" /> },
];

const TechStack = () => (
  <section className="tech-stack-section">
    <h3 className="h3 tech-stack-title">Tech Stack / Tools</h3>
    <div className="tech-stack-grid">
      {techs.map((tech) => (
        <div className="tech-stack-item" key={tech.name}>
          <span className="tech-stack-icon">{tech.icon}</span>
          <span className="tech-stack-label">{tech.name}</span>
        </div>
      ))}
    </div>
  </section>
);

export default TechStack;
