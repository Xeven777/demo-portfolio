import { motion } from "framer-motion";
import arrow from "@/public/arrow.png";

interface ProjectPreviewProps {
  name?: string;
  link?: string | undefined;
  textColor?: string | undefined;
  description?: string;
  imageUrl?: string | undefined;
  bgColor?: string;
}

const ProjectPreview = ({
  name = "Name",
  description = "Description",
  imageUrl,
  link = "#",
  bgColor = "#e4e4e7",
  textColor = "#f7f7f7",
}: ProjectPreviewProps) => {
  return (
    <motion.div
      className={`hover:shadow-lg transition-all duration-500 h-[27rem] rounded-xl overflow-hidden`}
      style={{ backgroundColor: `${bgColor}` }}
      initial="initial"
      whileInView="animate"
      variants={PreviewAnimation}
    >
      <div
        className="h-full w-full px-10 py-8 duration-500 transition-all hover:scale-105 "
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="flex justify-between">
          <div className="max-w-[70%] ">
            <h2
              className="font-semibold text-2xl "
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
              <img
                src={arrow}
                alt=""
                width={50}
                height={50}
                className="rounded-full p-2 bg-slate-100 bg-opacity-40 backdrop-blur flex items-center cursor-pointer object-cover"
              />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const PreviewAnimation = {
  initial: {
    y: 30,
    opacity: 0,
    scale: 0.8,
  },
  animate: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export default ProjectPreview;
