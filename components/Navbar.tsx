import { logo } from "@/public/assets";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import { RiGithubLine } from "react-icons/ri";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

interface props {
  sendEmail: any;
  isScrolled?: boolean;
}

const Navbar = ({ sendEmail, isScrolled }: props) => {
  const email = "midhunchakkaravarthy07@gmail.com";
  const subject = encodeURIComponent("Inquiry from your portfolio");
  const body = encodeURIComponent("I saw your portfolio and would like to discuss potential opportunities. Looking forward to connecting!");

  // Mailto link with subject and body
  const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;
  const divref = useRef<HTMLDivElement | null>(null);
  const [showMenu, setShowMenu] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setShowMenu(false);
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
    const links = document.querySelectorAll(".nav-link");
    links.forEach((link) => {
      link.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  };

  const handleClick = (e: any) => {
    if (e.target.contains(divref.current)) {
      setShowMenu(false);
    }
  };

  return (
    <div className={`w-full shadow-navbarShadow sticky top-0 z-50 transition-all duration-500 ease-out will-change-transform ${isScrolled ? 'h-16 bg-bodyColor/95 backdrop-blur-xl border-b border-glassBorder' : 'h-20 lg:h-[12vh] bg-transparent'}`}>
      <div className="max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image className="w-24" src={logo} alt="image" />
        </motion.div>
        <div className="hidden mdl:inline-flex items-center gap-7 ">
          <ul className="flex text-[13px] gap-7">
            <Link
              href="#home"
              onClick={handleScroll}
              className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1 }}
              >
                Home
              </motion.li>
            </Link>
            <Link
              href="#about"
              onClick={handleScroll}
              className="flex items-center gap-1 font-medium text-textDark 
              hover:text-textGreen cursor-pointer duration-300 nav-link"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.1 }}
              >
                <span className="text-textGreen">01.</span>
                About
              </motion.li>
            </Link>
            <Link
              href="#experience"
              onClick={handleScroll}
              className="flex items-center gap-1 font-medium text-textDark 
              hover:text-textGreen cursor-pointer duration-300 nav-link"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.2 }}
              >
                <span className="text-textGreen">02.</span>
                Experience
              </motion.li>
            </Link>
            <Link
              href="#contact"
              onClick={handleScroll}
              className="flex items-center gap-1 font-medium text-textDark 
              hover:text-textGreen cursor-pointer duration-300 nav-link"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.3 }}
              >
                <span className="text-textGreen">03.</span>
                Contact
              </motion.li>
            </Link>
          </ul>
          <a href="/assets/resume.pdf" target="_blank">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="px-4 py-2 rounded-md text-textGreen text-[13px] border border-textGreen/50
          hover:bg-textGreen/10 hover:border-textGreen hover:shadow-[0_0_15px_rgba(100,255,218,0.3)] transition-colors"
            >
              Resume
            </motion.button>
          </a>
        </div>
        <div
          onClick={() => setShowMenu(true)}
          className="w-6 h-5 flex flex-col justify-between items-center mdl:hidden
        text-4xl text-textFreen cursor-pointer overflow-hidden group"
        >
          <span
            className="w-full h-[2px] bg-textGreen inline-flex transform 
            group-hover:translate-x-2 transition-all ease-in-out duration-300"
          ></span>
          <span
            className="w-full h-[2px] bg-textGreen inline-flex transform translate-x-3
            group-hover:translate-x-0 transition-all ease-in-out duration-300"
          ></span>
          <span
            className="w-full h-[2px] bg-textGreen inline-flex transform translate-x-1
            group-hover:translate-x-3 transition-all ease-in-out duration-300"
          ></span>
        </div>
        {showMenu && (
          <div
            onClick={handleClick}
            ref={divref}
            className="absolute mdl:hidden top-0 right-0 w-full h-screen
        bg-black bg-opacity-50 flex flex-col items-end"
          >
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.1 }}
              className="w-[80%] h-full overflow-y-scroll scrollbarHide bg-bodyColor/95 backdrop-blur-xl border-l border-glassBorder
            flex flex-col items-center px-4 py-10 relative shadow-glass"
            >
              <MdOutlineClose
                onClick={() => setShowMenu(false)}
                className="text-3xl text-textGreen cursor-pointer hover:text-red-500
                absolute top-4 right-4"
              />
              <div className="flex flex-col items-center gap-7">
                <ul className="flex flex-col text-base gap-7">
                  <Link
                    href="#home"
                    onClick={handleScroll}
                    className="flex items-center gap-1 font-medium text-textDark 
              hover:text-textGreen cursor-pointer duration-300 nav-link"
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        duration: 0.2,
                        delay: 0.1,
                        ease: "easeIn",
                      }}
                    >
                      Home
                    </motion.li>
                  </Link>
                  <Link
                    href="#about"
                    onClick={handleScroll}
                    className="flex items-center gap-1 font-medium text-textDark 
              hover:text-textGreen cursor-pointer duration-300 nav-link"
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        duration: 0.2,
                        delay: 0.2,
                        ease: "easeIn",
                      }}
                    >
                      <span className="text-textGreen">01.</span>
                      About
                    </motion.li>
                  </Link>
                  <Link
                    href="#experience"
                    onClick={handleScroll}
                    className="flex items-center gap-1 font-medium text-textDark 
              hover:text-textGreen cursor-pointer duration-300 nav-link"
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        duration: 0.2,
                        delay: 0.3,
                        ease: "easeIn",
                      }}
                    >
                      <span className="text-textGreen">02.</span>
                      Experience
                    </motion.li>
                  </Link>
                  <Link
                    href="#contact"
                    onClick={handleScroll}
                    className="flex items-center gap-1 font-medium text-textDark 
              hover:text-textGreen cursor-pointer duration-300 nav-link"
                  >
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        duration: 0.2,
                        delay: 0.4,
                        ease: "easeIn",
                      }}
                    >
                      <span className="text-textGreen">03.</span>
                      Contact
                    </motion.li>
                  </Link>
                </ul>
                <a  href="/assets/resume.pdf" target="_blank">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      delay: 0.6,
                      ease: "easeIn",
                    }}
                    className="w-32 h-10 rounded-md text-textGreen text-[13px] border
                    border-textGreen/50 hover:bg-textGreen/10 hover:border-textGreen hover:shadow-[0_0_15px_rgba(100,255,218,0.3)] transition-colors"
                  >
                    Resume
                  </motion.button>
                </a>
                <div className="flex gap-4">
                  <motion.a
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1, ease: "easeIn" }}
                    href="https://github.com/Midhun-live"
                    target="_blank"
                  >
                    <span
                      className="w-10 h-10 text-xl bg-glassBg backdrop-blur-md border-[1px]
                    border-glassBorder hover:border-textGreen text-zinc-200 rounded-full
                    inline-flex items-center justify-center hover:text-textGreen hover:shadow-[0_0_15px_rgba(100,255,218,0.3)]
                    cursor-pointer hover:-translate-y-2 transition-all duration-300"
                    >
                      <RiGithubLine />
                    </span>
                  </motion.a>
                  <motion.a
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1, ease: "easeIn" }}
                    href="https://www.linkedin.com/in/midhun-chakkaravarthy/"
                    target="_blank"
                  >
                    <span
                      className="w-10 h-10 text-xl bg-glassBg backdrop-blur-md border-[1px]
                    border-glassBorder hover:border-textGreen text-zinc-200 rounded-full
                    inline-flex items-center justify-center hover:text-textGreen hover:shadow-[0_0_15px_rgba(100,255,218,0.3)]
                    cursor-pointer hover:-translate-y-2 transition-all duration-300"
                    >
                      <FaLinkedinIn />
                    </span>
                  </motion.a>
                  <motion.a
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1, ease: "easeIn" }}
                    href="https://leetcode.com/u/Midhun-Chakkaravarthy/"
                    target="_blank"
                  >
                    <span
                      className="w-10 h-10 text-xl bg-glassBg backdrop-blur-md border-[1px]
                    border-glassBorder hover:border-textGreen text-zinc-200 rounded-full
                    inline-flex items-center justify-center hover:text-textGreen hover:shadow-[0_0_15px_rgba(100,255,218,0.3)]
                    cursor-pointer hover:-translate-y-2 transition-all duration-300"
                    >
                      <SiLeetcode />
                    </span>
                  </motion.a>
                  <motion.a
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1, ease: "easeIn" }}
                    href="https://www.instagram.com/_midhuu_/"
                    target="_blank"
                  >
                    <span
                      className="w-10 h-10 text-xl bg-glassBg backdrop-blur-md border-[1px]
                    border-glassBorder hover:border-textGreen text-zinc-200 rounded-full
                    inline-flex items-center justify-center hover:text-textGreen hover:shadow-[0_0_15px_rgba(100,255,218,0.3)]
                    cursor-pointer hover:-translate-y-2 transition-all duration-300"
                    >
                      <FaInstagram />
                    </span>
                  </motion.a>
                </div>
              </div>
              <motion.a
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, ease: "easeIn" }}
                className="text-sm w-72 tracking-widest text-textGreen text-center mt-4"
                href={mailtoLink}
                // onClick={sendEmail}
              >
                <p>midhunchakkaravarthy07@gmail.com</p>
              </motion.a>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
