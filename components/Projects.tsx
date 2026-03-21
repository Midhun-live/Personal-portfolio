import React from "react";
import SectionTitle from "./SectionTitle";
import Image from "next/image";
import { project_1 } from "@/public/assets";
import { AiOutlineYoutube } from "react-icons/ai";
import { RiGithubLine } from "react-icons/ri";
import { RxOpenInNewWindow } from "react-icons/rx";
import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "../utils/motion";

const Projects = () => {
  return (
    <motion.section 
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      id="project" 
      className="max-w-container mx-auto lgl:px-20 py-24"
    >
      <motion.div variants={fadeInUp}><SectionTitle title="Things I have Built" titleNumber="03"></SectionTitle></motion.div>
      <div className="w-full flex flex-col items-center justify-between gap-28 mt-10">
        {/* Project-1  */}
        <motion.div variants={fadeInUp} className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row gap-6">
            <a
              className="w-full xl:w-1/2 h-auto relative group overflow-hidden rounded-2xl bg-white/5 p-4 lg:p-8 border border-white/10 hover:border-textGreen/30 transition-all duration-500"
              href="https://www.linkedin.com/in/midhun-chakkaravarthy/"
              target="_blank"
            >
              <div className="w-full h-full rounded-xl overflow-hidden mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-500 bg-white shadow-xl">
                <Image
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 ease-out will-change-transform"
                  src={project_1}
                  alt="project-1"
                />
              </div>
            </a>
            <div
              className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between
        items-end text-right z-10"
            >
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Event Hub</h3>
              <p className="glass-card text-sm md:text-base p-4 md:p-6 xl:-mr-16 hover:shadow-[0_0_20px_rgba(100,255,218,0.15)] transition-shadow duration-300 z-10 relative">
                A website where we can post share and comment over a post that
                is useful for
                <span className="text-textGreen">
                  {" "}Students, working professionals
                </span>{" "}
                in the field of education.
              </p>
              <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-3 flex-wrap justify-end text-textDark">
                <li className="bg-textGreen/10 border border-textGreen/20 text-textGreen px-3 py-1 rounded-full text-xs">React JS</li>
                <li className="bg-textGreen/10 border border-textGreen/20 text-textGreen px-3 py-1 rounded-full text-xs">Firebase</li>
                <li className="bg-textGreen/10 border border-textGreen/20 text-textGreen px-3 py-1 rounded-full text-xs">JQuery</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://github.com/Midhun-live"
                  target="_blank"
                >
                  <RiGithubLine />
                </a>
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://github.com/Midhun-live"
                  target="_blank"
                >
                  <AiOutlineYoutube />
                </a>
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://github.com/Midhun-live"
                  target="_blank"
                >
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
        {/* Project-2 */}
        <motion.div variants={fadeInUp} className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row-reverse gap-6">
            <a
              className="w-full xl:w-1/2 h-auto relative group overflow-hidden rounded-2xl bg-white/5 p-4 lg:p-8 border border-white/10 hover:border-textGreen/30 transition-all duration-500"
              href="https://www.linkedin.com/in/midhun-chakkaravarthy/"
              target="_blank"
            >
              <div className="w-full h-full rounded-xl overflow-hidden mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-500 bg-white shadow-xl">
                <Image
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 ease-out will-change-transform"
                  src={project_1}
                  alt="project-2"
                />
              </div>
            </a>
            <div
              className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between
        items-end text-right xl:-mr-16 z-10"
            >
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Event Hub</h3>
              <p className="glass-card text-sm md:text-base p-4 md:p-6 xl:-mr-16 hover:shadow-[0_0_20px_rgba(100,255,218,0.15)] transition-shadow duration-300 z-10 relative">
                A website where we can post share and comment over a post that
                is useful for
                <span className="text-textGreen">
                  {" "}Students, working professionals
                </span>{" "}
                in the field of education.
              </p>
              <ul
                className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2
            md:gap-5 justify-between text-textDark"
              >
                <li>React JS</li>
                <li>Firebase</li>
                <li>JQuery</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://github.com/Midhun-live"
                  target="_blank"
                >
                  <RiGithubLine />
                </a>
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://github.com/Midhun-live"
                  target="_blank"
                >
                  <AiOutlineYoutube />
                </a>
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://github.com/Midhun-live"
                  target="_blank"
                >
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;
