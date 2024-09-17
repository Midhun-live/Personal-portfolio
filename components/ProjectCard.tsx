import { FaRegFolder } from "react-icons/fa";
import { RxOpenInNewWindow } from "react-icons/rx";
import { FaYoutube } from 'react-icons/fa';
import { useRouter } from 'next/router'


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
      <div
        className="w-full h-80 shadow-projectShadow rounded-lg bg-[#112240] p-7 flex flex-col justify-between 
      gap-6 hover:translate-y-2 transition-transform duration-300 group"
      >
        <div className="flex justify-between items-center">
          <FaRegFolder className="text-4xl text-textGreen" />
          <div className="flex">
          { title!=="Alumni Portal"  && <RxOpenInNewWindow className="text-4xl hover:text-textGreen" />}
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
          className="text-xs mdl:text-sm text-textDark group-hover:text-textGreen flex items-center gap-2
      justify-between flex wrap"
        >
          {techList.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </a>
  );
};

export default ProjectCard;
