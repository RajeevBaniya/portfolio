import { useState, useEffect } from "react";
import { FaRegEye } from "react-icons/fa";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/projects.json")
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
      })
      .catch((error) => console.error("Error loading project data:", error));
  }, []);

  return (
    <section className="portfolio" data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Projects</h2>
      </header>

      {/* Portfolio items */}
      <section className="projects">
        <ul className="project-list">
          {projects.map((project) => (
            <li className="project-item active" key={project.id}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <FaRegEye />
                  </div>
                  <img src={project.image} alt={project.title} loading="lazy" />
                </figure>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-category">{project.category}</p>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};

export default Portfolio;
