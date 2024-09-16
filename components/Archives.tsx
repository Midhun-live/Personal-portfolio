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
      xl:grid-cols-2 gap-6 mt-10"
      >
        <ProjectCard
          title="Event Hub"
          content="Engineered an accessible platform that streamlined the discovery of diverse online events, culminating in a surge in user engagement and active participation across a spectrum of webinars, workshops, and events"
          techList={["React JS", "JQuery", "Firebase"]}
          link="https://newnormal-hackathon.vercel.app/"
        />
        <ProjectCard
          title="Alumni Portal"
          content="Currently involved in an ongoing web project focused on developing an alumni portal, fostering connections between alumni and their respective colleges through community features and private communication channels."
          techList={["React JS", "JQuery", "Firebase"]}
          link="https://github.com/Midhun-live"
        />
        <ProjectCard
          title="Chat App"
          content="This chat application is built using the MERN stack and provides functionalities such as one-to-one chat and broadcast (one-to-many) features."
          techList={["MongoDB", "Express", "ReactJS","Node.js", "Socket.io"]}
          link="https://github.com/Midhun-live/chat-app"
        />
        <ProjectCard
          title="Supabase Demo"
          content="This website uses the Supabase client to connect to a database and display student details on the frontend, demonstrating the effective integration of Supabase with the user interface."
          techList={["React JS", "Supabase"]}
          link="https://supabase-demo-s1u2.vercel.app/e"
        />
        <ProjectCard
          title="Advice App"
          content="This application uses the Advice Slip API and automatically generates a piece of advice each time the site is refreshed."
          techList={["HTML", "CSS", "JS"]}
          link="https://midhun-live.github.io/advice-app/"
        />
        {/* <ProjectCard
          title="Paris Olympic 2024 - India"
          content="This is a static website which lists the medal winners in the Paris Olympic - 2024 from India."
          techList={["HTML", "JS", "Tailwind CSS"]}
          link="https://olympic2024.vercel.app/"
        /> */}
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
      {/* <div className="mt-12 flex items-center justify-center">
        <button
          onClick={() => setShow(!show)}
          className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
        >
          {show ? "show more" : "show less"}
        </button>
      </div> */}
    </div>
  );
};

export default Archives;