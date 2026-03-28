import React from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "../utils/motion";

const Archives = () => {
  return (
    <motion.div 
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      id="project" 
      className="max-w-contentContainer mx-auto px-4 py-24"
    >
      <motion.div variants={fadeInUp} className="w-full flex flex-col items-center">
        <h2 className="text-3xl font-titleFont font-semibold">My Projects</h2>
        <p className="text-sm font-titleFont text-textGreen">take a look</p>
      </motion.div>
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 max-w-4xl mx-auto"
      >
        <motion.div variants={fadeInUp} className="flex h-full">
          <ProjectCard
            title="Event Hub"
            content="Created a platform that facilitates the discovery of online events, enhancing user engagement in webinars and workshops."
            techList={["React JS", "JQuery", "Firebase"]}
            link="https://newnormal-hackathon.vercel.app/"
          />
        </motion.div>
        <motion.div variants={fadeInUp} className="flex h-full">
          <ProjectCard
            title="Advice App"
            content="This application uses the Advice Slip API and automatically generates a piece of advice each time the site is refreshed."
            techList={["HTML", "CSS", "JS"]}
            link="https://midhun-live.github.io/advice-app/"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Archives;