import { motion } from "framer-motion";
interface props {
  sendEmail: any;
}

const Banner = ({ sendEmail }: props) => {
  return (
    <section
      id="home"
      className="max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4
  lgl:gap-8 mdl:px-10 xl:px-4"
    >
      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-lg font-titleFont tracking-web text-textGreen"
      >
        Hi, I am
      </motion.h3>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-4xl lgl:text-6xl font-titleFont font-semibold flex flex-col"
      >
        Midhun Chakkaravarthy.{" "}
        <motion.span
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-textDark mt-2 lgl:mt-4"
        >
          Full Stack Developer
        </motion.span>
      </motion.h1>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-base md:max-w-[650px] text-textDark font-medium"
      >
        As a full stack developer, tackling both backend challenges and
        designing well-structured user interfaces brings great satisfaction.
        <br />
        When not coding, I’m a beginner flute player exploring the world of
        music and eager to learn more instruments. My goal is to blend technical
        expertise with creativity while enjoying a simple and fulfilling life.
        <br />
        <a href="/assets/CV.pdf" target="_black">
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
      <motion.button
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="w-52 h-14 text-sm font-titleFont border border-textGreen
      rounded-md text-textGreen tracking-wide hover:bg-bg-hoverColor duration-300"
        onClick={sendEmail}
      >
        Get in Touch
      </motion.button>
    </section>
  );
};

export default Banner;
