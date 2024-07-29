import { AiFillThunderbolt } from "react-icons/ai";
import SectionTtile from "./SectionTitle";
import Image from "next/image";
import { profile } from "@/public/assets";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
      <SectionTtile title="About Me" titleNumber="01" />
      <div className="flex flex-col lgl:flex-row gap-16">
        <div
          className="w-full lgl:w-2/3 text-base text-textDark font-medium flex
        flex-col gap-4"
        >
          <p>
            I am a passionate software developer with a strong background in
            full-stack development and a keen eye for innovative design. My
            expertise lies in creating dynamic and responsive web applications
            using modern frameworks like React and FastAPI.
          </p>
          <p>
            With a knack for problem-solving, I enjoy tackling challenging
            projects and continuously learning new technologies. Beyond coding,
            I am an avid learner, always seeking opportunities to expand my
            skill set and contribute to exciting projects.{" "}
          </p>
          <p>
            In my spare time, I love exploring the outdoors, engaging in tech
            communities, and working on personal coding projects.
          </p>
          <p>Here are few technologies am currently working</p>
          <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6">
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              JS
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              JAVA
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              REACT JS
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Angular
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Git
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Supabase
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Alembic
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-1/3 h-80 relative group">
          <div className="absolute w-full h-96 -left-6 -top-6 rounded-lg">
            <div className="w-full h-full relative z-20 flex pl-6 lg:pl-0">
              <Image
                src={profile}
                alt="profileImg"
                className="rounded-lg lg:w-full h-full object-cover"
              />
              <div className="hidden lg:inline-block absolute w-full h-96 bg-designColor/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300" />
            </div>
          </div>
          <div className="hidden lg:inline-flex w-full h-96 border-2 border-designColor rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300" />
        </div>
      </div>
    </section>
  );
};

export default About;
