import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const Archives = () => {
  const [show, setShow] = useState(true);

  return (
    <div id="project" className="max-w-contentContainer mx-auto px-4 py-24">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-3xl font-titleFont font-semibold">My Projects</h2>
        <p className="text-sm font-titleFont text-textGreen">take a look</p>
      </div>
      <div
        className="grid grid-cols-1 md:grid-cols-2 
      xl:grid-cols-3 gap-6 mt-10"
      >
        <ProjectCard
          title="Event Hub"
          content="This is the best website that allows user to share post and comment
            on the post that is posted by the same or different user."
          techList={["React JS", "JQuery", "Firebase"]}
          link="https://github.com/Midhun-live"
        />
        <ProjectCard
          title="Supabase Demo"
          content="This is the best website that allows user to share post and comment
          on the post that is posted by the same or different user."
          techList={["React JS", "JQuery", "Firebase"]}
          link="https://github.com/Midhun-live"
        />
        <ProjectCard
          title=""
          content="This is the best website that allows user to share post and comment
        on the post that is posted by the same or different user."
          techList={["React JS", "JQuery", "Firebase"]}
          link="https://github.com/Midhun-live"
        />
        <ProjectCard
          title="Event Hub"
          content="This is the best website that allows user to share post and comment
      on the post that is posted by the same or different user."
          techList={["React JS", "JQuery", "Firebase"]}
          link="https://github.com/Midhun-live"
        />
        <ProjectCard
          title="Event Hub"
          content="This is the best website that allows user to share post and comment
    on the post that is posted by the same or different user."
          techList={["React JS", "JQuery", "Firebase"]}
          link="https://github.com/Midhun-live"
        />
        <ProjectCard
          title="Event Hub"
          content="This is the best website that allows user to share post and comment
            on the post that is posted by the same or different user."
          techList={["React JS", "JQuery", "Firebase"]}
          link="https://github.com/Midhun-live"
        />
        {!show && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <ProjectCard
                title="Event Hub"
                content="This is the best website that allows user to share post and comment
              on the post that is posted by the same or different user."
                techList={["React JS", "JQuery", "Firebase"]}
                link="https://github.com/Midhun-live"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <ProjectCard
                title="Event Hub"
                content="This is the best website that allows user to share post and comment
              on the post that is posted by the same or different user."
                techList={["React JS", "JQuery", "Firebase"]}
                link="https://github.com/Midhun-live"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <ProjectCard
                title="Event Hub"
                content="This is the best website that allows user to share post and comment
              on the post that is posted by the same or different user."
                techList={["React JS", "JQuery", "Firebase"]}
                link="https://github.com/Midhun-live"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <ProjectCard
                title="Event Hub"
                content="This is the best website that allows user to share post and comment
              on the post that is posted by the same or different user."
                techList={["React JS", "JQuery", "Firebase"]}
                link="https://github.com/Midhun-live"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <ProjectCard
                title="Event Hub"
                content="This is the best website that allows user to share post and comment
              on the post that is posted by the same or different user."
                techList={["React JS", "JQuery", "Firebase"]}
                link="https://github.com/Midhun-live"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <ProjectCard
                title="Event Hub"
                content="This is the best website that allows user to share post and comment
              on the post that is posted by the same or different user."
                techList={["React JS", "JQuery", "Firebase"]}
                link="https://github.com/Midhun-live"
              />
            </motion.div>
          </>
        )}
      </div>
      <div className="mt-12 flex items-center justify-center">
        <button
          onClick={() => setShow(!show)}
          className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
        >
          {show ? "show more" : "show less"}
        </button>
      </div>
    </div>
  );
};

export default Archives;
