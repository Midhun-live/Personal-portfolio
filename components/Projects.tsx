import React from "react";
import SectionTitle from "./SectionTitle";
import Image from "next/image";
import { project_1 } from "@/public/assets";
import { AiOutlineYoutube } from "react-icons/ai";
import { RiGithubLine } from "react-icons/ri";
import { RxOpenInNewWindow } from "react-icons/rx";

const Projects = () => {
  return (
    <section id="project" className="max-w-container mx-auto lgl:px-20 py-24">
      <SectionTitle title="Things I have Built" titleNumber="03"></SectionTitle>
      <div className="w-full flex flex-col items-center justify-between gap-28 mt-10">
        {/* Project-1  */}
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row gap-6">
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href="https://www.linkedin.com/in/midhun-chakkaravarthy/"
              target="_blank"
            >
              <div>
                <Image
                  className="w-full h-full object-contain"
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
              <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 xl:-mr-16 rounded-md">
                A website where we can post share and comment over a post that
                is useful for
                <span className="text-textGreen">
                  Students, working professionals
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
        </div>
        {/* Project-2 */}
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row-reverse gap-6">
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href="https://www.linkedin.com/in/midhun-chakkaravarthy/"
              target="_blank"
            >
              <div>
                <Image
                  className="w-full h-full object-contain"
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
              <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 xl:-mr-16 rounded-md">
                A website where we can post share and comment over a post that
                is useful for
                <span className="text-textGreen">
                  Students, working professionals
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
        </div>
      </div>
    </section>
  );
};

export default Projects;
