import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaDocker,
  FaGitAlt,
  FaLinux,
  FaBrain,
  FaSearch,
} from "react-icons/fa";
import {
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiExpress,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTypescript,
  SiNextdotjs,
  SiFastapi,
  SiPostgresql,
  SiRedis,
} from "react-icons/si";

const techs = [
  // Languages
  { name: "JavaScript", icon: <SiJavascript color="#f7df1e" /> },
  { name: "TypeScript", icon: <SiTypescript color="#3178c6" /> },
  { name: "Python", icon: <img src="/images/python.png" alt="Python" style={{ width: "2.2rem", height: "2.2rem", objectFit: "contain" }} /> },
  { name: "HTML5", icon: <SiHtml5 color="#e34f26" /> },
  { name: "CSS3", icon: <SiCss3 color="#1572b6" /> },

  // Frontend
  { name: "React", icon: <FaReact color="#61dafb" /> },
  { name: "Next.js", icon: <SiNextdotjs color="#fff" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss color="#38bdf8" /> },

  // Backend
  { name: "Node.js", icon: <FaNodeJs color="#3c873a" /> },
  { name: "Express", icon: <SiExpress color="#fff" /> },
  { name: "FastAPI", icon: <SiFastapi color="#009688" /> },

  // Databases
  { name: "MongoDB", icon: <SiMongodb color="#47a248" /> },
  { name: "PostgreSQL", icon: <SiPostgresql color="#336791" /> },
  { name: "MySQL", icon: <SiMysql color="#00758f" /> },
  { name: "Redis", icon: <SiRedis color="#ff4438" /> },

  // AI
  { name: "LLMs", icon: <FaBrain color="#a78bfa" /> },
  { name: "RAG", icon: <FaSearch color="#22d3ee" /> },
  { name: "Hugging Face", icon: <span aria-hidden="true" style={{ fontSize: "1.8rem", lineHeight: 1 }}>🤗</span> },

  // Cloud & DevOps
  { name: "AWS", icon: <FaAws color="#ff9900" /> },
  { name: "Docker", icon: <FaDocker color="#2496ed" /> },
  { name: "Linux", icon: <FaLinux color="#fff" /> },

  // Tools
  { name: "Git & GitHub", icon: <FaGitAlt color="#f34f29" /> },
  { name: "Firebase", icon: <img src="/images/firebase.png" alt="Firebase" style={{ width: "2.2rem", height: "2.2rem", objectFit: "contain" }} /> },
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
