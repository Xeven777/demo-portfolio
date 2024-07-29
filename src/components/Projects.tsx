import ProjectPreview from "@/components/projectPreview";

const projects = [
  {
    name: "PricePulse",
    link: "https://pricepulse.vercel.app/",
    description:
      "A price tracker for Amazon with scheduled email alerts for price drops",
    imageUrl: "/pricepulse.png",
    bgColor: "#f7ca00",
    textColor: "#231f10",
  },
  {
    name: "ADA-7x",
    link: "https://ada-7x.netlify.app/",
    description: "A GPT-4 powered article summarizer",
    imageUrl: "/ada7x.png",
    textColor: "#008bdf",
  },
  {
    name: "iNotes",
    link: "https://inotes-gpt.vercel.app",
    description: "Intelligent note taking app with inbuilt AI-assistant",
    imageUrl: "/inotes.png",
    bgColor: "#231f10",
    textColor: "#f7ca00",
  },
  {
    name: "Simplifyy",
    link: "https://simplifyy.vercel.app/",
    description: "Simple and efficient URL shortener and QR generator",
    imageUrl: "",
    bgColor: "#490daa",
    textColor: "#fff",
  },
];

const Projects = () => {
  return (
    <div className="max-w-5xl mb-4 mx-auto">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <ProjectPreview
            key={index}
            name={project.name}
            link={project.link}
            description={project.description}
            imageUrl={project.imageUrl}
            bgColor={project.bgColor}
            textColor={project.textColor}
          />
        ))}
      </section>
    </div>
  );
};

export default Projects;
