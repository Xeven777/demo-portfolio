import BlurFade from "./magicui/blur-fade";
import { ArrowUpRight } from "lucide-react";

interface ProjectPreviewProps {
  name?: string;
  link?: string | undefined;
  textColor?: string | undefined;
  description?: string;
  delay?: number;
  imageUrl?: string | undefined;
}

const ProjectPreview = ({
  name = "Name",
  description = "Description",
  imageUrl,
  link = "#",
  textColor = "#f7f7f7",
  delay = 0,
}: ProjectPreviewProps) => {
  return (
    <BlurFade delay={delay} inView>
      <div
        className={`hover:shadow-lg group relative bg-primary/50 transition-all duration-500 h-[27rem] rounded-xl overflow-hidden`}
      >
        <img
          src={imageUrl}
          alt={name}
          className="object-cover h-full w-full z-0 absolute top-0 left-0 group-hover:scale-110 transition-all duration-700"
        />
        <div className="absolute bg-gradient-to-br from-black via-zinc-900 to-transparent -top-10 -left-16 h-52 blur-2xl w-3/4 z-30"></div>
        <div className="h-full w-full px-10 py-8">
          <div className="flex justify-between">
            <div className="max-w-[70%] z-50">
              <h2
                className="font-semibold text-3xl z-50"
                style={{ color: `${textColor}` }}
              >
                {name}
              </h2>
              <p
                className="text-sm font-medium mt-3"
                style={{ color: `${textColor}` }}
              >
                {description}
              </p>
            </div>
            <div className="flex-shrink-0">
              <a href={link} target="__blank">
                <ArrowUpRight
                  size={50}
                  className="rounded-full p-2 hover:rotate-45 transition-all duration-300 bg-slate-100 bg-opacity-40 backdrop-blur flex items-center cursor-pointer object-cover"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </BlurFade>
  );
};

export default ProjectPreview;
