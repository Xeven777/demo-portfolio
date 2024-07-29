import ProjectPreview from "./projectPreview";
import { useEffect, useState } from "react";

type Project = {
  name: string;
  link: string;
  description: string;
  imageUrl: string;
};

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const savedProjects = localStorage.getItem("projects");
      if (savedProjects) {
        const parsedProjects = JSON.parse(savedProjects);
        setProjects(parsedProjects);
        return;
      }

      const response = await fetch(
        "https://portfolio-api-lyart-beta.vercel.app/projects"
      );
      const data = await response.json();
      localStorage.setItem("projects", JSON.stringify(data));

      setProjects(data);
    };

    fetchProjects();
  }, []);

  return (
    <div className="max-w-5xl mb-4 mx-auto">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <ProjectPreview
            delay={index * 0.1}
            key={index}
            name={project.name}
            link={project.link}
            description={project.description}
            imageUrl={project.imageUrl}
          />
        ))}
      </section>
    </div>
  );
};

export default Projects;
