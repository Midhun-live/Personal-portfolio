import { RiGithubLine } from "react-icons/ri";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <div
      className="hidden mdl:inline-flex xl:hidden items-center justify-center
  w-full py-6 gap-4"
    >
      <a href="https://github.com/Midhun-live" target="_blank">
        <span
          className="w-10 h-10 text-xl bg-glassBg backdrop-blur-md border-[1px] border-glassBorder
        hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center
        justify-center hover:text-textGreen hover:shadow-[0_0_15px_rgba(100,255,218,0.3)] cursor-pointer hover:-translate-y-2
        transition-all duration-300"
        >
          <RiGithubLine />
        </span>
      </a>
      <a
        href="https://www.linkedin.com/in/midhun-chakkaravarthy/"
        target="_blank"
      >
        <span
          className="w-10 h-10 text-xl bg-glassBg backdrop-blur-md border-[1px] border-glassBorder
        hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center
        justify-center hover:text-textGreen hover:shadow-[0_0_15px_rgba(100,255,218,0.3)] cursor-pointer hover:-translate-y-2
        transition-all duration-300"
        >
          <FaLinkedinIn />
        </span>
      </a>
      <a href="https://leetcode.com/u/Midhun-Chakkaravarthy/" target="_blank">
        <span
          className="w-10 h-10 text-xl bg-glassBg backdrop-blur-md border-[1px] border-glassBorder
        hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center
        justify-center hover:text-textGreen hover:shadow-[0_0_15px_rgba(100,255,218,0.3)] cursor-pointer hover:-translate-y-2
        transition-all duration-300"
        >
          <SiLeetcode />
        </span>
      </a>
      <a href="https://www.instagram.com/_midhuu_/" target="_blank">
        <span
          className="w-10 h-10 text-xl bg-glassBg backdrop-blur-md border-[1px] border-glassBorder
        hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center
        justify-center hover:text-textGreen hover:shadow-[0_0_15px_rgba(100,255,218,0.3)] cursor-pointer hover:-translate-y-2
        transition-all duration-300"
        >
          <FaInstagram />
        </span>
      </a>
    </div>
  );
};

export default Footer;
