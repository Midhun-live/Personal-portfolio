import { FaRegFolder } from "react-icons/fa";
import { RxOpenInNewWindow } from "react-icons/rx";
import { FaYoutube } from 'react-icons/fa';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';


interface Props {
  title: string;
  content: string;
  techList: string[];
  link: string;
}

const ProjectCard = ({ title, content, techList, link }: Props) => {
  const router=useRouter();
  return (
    <a href={link} target="_blank">
      <motion.div
        whileHover={{ y: -6, scale: 1.02 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="w-full h-80 glass-card p-7 flex flex-col justify-between 
      gap-6 shadow-glass group will-change-transform"
      >
        <div className="flex justify-between items-center">
          <FaRegFolder className="text-4xl text-textGreen" />
          <div className="flex">
          <RxOpenInNewWindow className="text-4xl hover:text-textGreen" />
          { title === "Event Hub" && <FaYoutube onClick={() => router.push('https://www.youtube.com/watch?v=SlnenbP5eCM')} className="text-4xl hover:text-textGreen"/>}
          </div>
        </div>
        <div>
          <h2
            className="text-xl font-titleFont font-semibold tracking-wide
        group-hover:text-textGreen"
          >
            {title}
          </h2>
          <p className="text-sm mt-3">{content}</p>
        </div>
        <ul
          className="text-xs mdl:text-sm text-textDark flex items-center gap-2
      flex-wrap"
        >
          {techList.map((item, i) => (
            <li key={i} className="bg-textGreen/10 border border-textGreen/20 text-textGreen px-2 py-1 rounded-full text-xs hover:bg-textGreen/20 transition-colors">{item}</li>
          ))}
        </ul>
      </motion.div>
    </a>
  );
};

export default ProjectCard;
