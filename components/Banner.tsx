import { motion } from "framer-motion";
import { staggerContainer, fadeInUp, buttonVariants } from "../utils/motion";

interface props {
  sendEmail: any;
}

const Banner = ({ sendEmail }: props) => {
  const email = "midhunchakkaravarthy07@gmail.com";
  const subject = encodeURIComponent("Inquiry from your portfolio");
  const body = encodeURIComponent("I saw your portfolio and would like to discuss potential opportunities. Looking forward to connecting!");

  // Mailto link with subject and body
  const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      id="home"
      className="max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4
  lgl:gap-8 mdl:px-10 xl:px-4"
    >
      <motion.h3
        variants={fadeInUp}
        className="text-lg font-titleFont tracking-web text-textGreen"
      >
        Hi, I am
      </motion.h3>
      <motion.h1
        variants={fadeInUp}
        className="text-4xl lgl:text-7xl font-titleFont font-bold flex flex-col"
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-textLight to-textDark/80">Midhun Chakkaravarthy.</span>{" "}
        <motion.span
          className="text-accent-gradient mt-2 lgl:mt-4"
        >
          Full Stack AI Developer
        </motion.span>
      </motion.h1>
      <motion.p
        variants={fadeInUp}
        className="text-base md:max-w-[650px] text-textDark font-medium"
      >
        I design and develop end-to-end applications — from backend architecture to intuitive user interfaces, powering scalable and AI-driven experiences.        <br />
        <br />
        <a href="/assets/resume.pdf" target="_blank">
          <span
            className="text-textGreen inline-flex relative cursor-pointer h-7
          overflow-x-hidden group"
          >
            Know More
            <span
              className="absolute w-full h-[1px] bg-textGreen left-0 bottom-1 -translate-x-[110%]
            group-hover:translate-x-0 transition-transform duration-500"
            ></span>
          </span>
        </a>
      </motion.p>
      <motion.a href={mailtoLink} variants={fadeInUp}>
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          className="w-52 h-14 text-sm font-titleFont bg-textGreen/10 border border-textGreen
      rounded-md text-textGreen tracking-wide hover:bg-textGreen hover:text-bodyColor shadow-[0_0_15px_rgba(100,255,218,0.2)] hover:shadow-[0_0_20px_rgba(100,255,218,0.5)] transition-colors duration-300"
        >
          Get in Touch
        </motion.button>
      </motion.a>
    </motion.section>
  );
};

export default Banner;
