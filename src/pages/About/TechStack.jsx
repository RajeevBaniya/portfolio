import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaDocker,
  FaGitAlt,
  FaLinux,
  FaJava,
  FaDatabase,
} from "react-icons/fa";
import {
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiPostman,
  SiExpress,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiClerk,
  SiSupabase,
  SiTypescript,
} from "react-icons/si";

const techs = [
  { name: "JavaScript", icon: <SiJavascript color="#f7df1e" /> },
  { name: "Python", icon: <img src="/images/python.png" alt="Python" style={{ width: "2.2rem", height: "2.2rem", objectFit: "contain" }} /> },
  { name: "HTML5", icon: <SiHtml5 color="#e34f26" /> },
  { name: "CSS3", icon: <SiCss3 color="#1572b6" /> },
  { name: "MongoDB", icon: <SiMongodb color="#47a248" /> },
  { name: "React", icon: <FaReact color="#61dafb" /> },
  { name: "Node.js", icon: <FaNodeJs color="#3c873a" /> },
  { name: "Express", icon: <SiExpress color="#fff" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss color="#38bdf8" /> },
  { name: "TypeScript", icon: <SiTypescript color="#3178c6" /> },
  { name: "Java", icon: <FaJava color="#e76f00" /> },
  { name: "SQL", icon: <FaDatabase color="#336791" /> },
  { name: "MySQL", icon: <SiMysql color="#00758f" /> },
  { name: "Docker", icon: <FaDocker color="#2496ed" /> },
  { name: "Git & GitHub", icon: <FaGitAlt color="#f34f29" /> },
  { name: "Postman", icon: <SiPostman color="#ff6c37" /> },
  { name: "Clerk", icon: <SiClerk color="#000" /> },
  { name: "Supabase", icon: <SiSupabase color="#3ecf8e" /> },
  { name: "Firebase", icon: <img src="/images/firebase.png" alt="Firebase" style={{ width: "2.2rem", height: "2.2rem", objectFit: "contain" }} /> },
  { name: "AWS", icon: <FaAws color="#ff9900" /> },
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
