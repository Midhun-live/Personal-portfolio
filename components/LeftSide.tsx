import { RiGithubLine } from "react-icons/ri";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const LeftSide = () => {
  return (
    <div
      className="w-full h-full flex flex-col items-center justify-end
  gap-4 text-textLight"
    >
      <div className="flex flex-col gap-4">
        <a href="https://github.com/Midhun-live" target="_blank">
          <span
            className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex 
          items-center justify-center hover:text-textGreen cursor-pointer
          hover:translate-y-2 translate-all duration-300"
          >
            <RiGithubLine />
          </span>
        </a>
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/midhun-chakkaravarthy/"
          target="_blank"
        >
          <span
            className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex 
          items-center justify-center hover:text-textGreen cursor-pointer
          hover:translate-y-2 translate-all duration-300"
          >
            <FaLinkedinIn />
          </span>
        </a>
      </div>
      <div>
        <a href="mailto:midhunchakkaravarthy07@gmail.com?subject=Vanakkam, Let's get Connected">
          <span
            className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex 
          items-center justify-center hover:text-textGreen cursor-pointer
          hover:translate-y-2 translate-all duration-300"
          >
            <SiLeetcode />
          </span>
        </a>
      </div>
      <div>
        <a href="https://www.instagram.com/_midhuu_/" target="_blank">
          <span
            className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex 
          items-center justify-center hover:text-textGreen cursor-pointer
          hover:translate-y-2 translate-all duration-300"
          >
            <FaInstagram />
          </span>
        </a>
      </div>
      <div className="w-[2px] h-32 bg-textDark"></div>
    </div>
  );
};

export default LeftSide;
