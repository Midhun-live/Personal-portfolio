import { AiFillThunderbolt } from "react-icons/ai";
import SectionTtile from "./SectionTitle";
import Image from "next/image";
import { profile } from "@/public/assets";

const About = () => {
  const languages=["C", "Java", "Python", "JavaScript", "TypeScript", "SQL"];
  const frameworks=["Angular", "React", "Next.js", "Node.js", "Express", "Spring Boot", "Tailwind CSS"];
  const databases=["PostgreSQL", "MySQL", "Supabase"];
  const tools=["Git", "SQLAlchemy", "Alembic", "Docker", "Livekit", "Kafka"]
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
            I am a skilled full-stack developer experienced in both frontend and backend technologies, 
            focused on creating smooth and efficient web applications.
          </p>
          <p>
            With a knack for problem-solving, I enjoy tackling challenging projects and continuously learning
            new technologies. Beyond coding, I am an avid learner, always seeking opportunities to expand my skill set and contribute to exciting projects.
          </p>
          <p>
            In my spare time, I love exploring the outdoors, playing chess, learning musical instruments, 
            and working on personal coding projects.
          </p>
          <p>Here are a few technologies I’m currently working with and familiar with..</p>
          <div className="flex gap-10 text-sm font-titleFont flex-wrap">
            <div>
            <h6 className="text-md text-textGreen font-titleFont font-semibold tracking-wide mb-2">Languages</h6>
              {languages.map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-textGreen">
                    <AiFillThunderbolt />
                  </span>
                  {item}
                </li>
              ))}
            </div>
            <div>
            <h6 className="text-md text-textGreen font-titleFont font-semibold tracking-wide mb-2">Frameworks</h6>
              {frameworks.map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-textGreen">
                    <AiFillThunderbolt />
                  </span>
                  {item}
                </li>
              ))}
            </div>
            <div>
            <h6 className="text-md text-textGreen font-titleFont font-semibold tracking-wide mb-2">Databases</h6>
              {databases.map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-textGreen">
                    <AiFillThunderbolt />
                  </span>
                  {item}
                </li>
              ))}
            </div>
            <div>
            <h6 className="text-md text-textGreen font-titleFont font-semibold tracking-wide mb-2">Tools</h6>
            {tools.map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="text-textGreen">
                  <AiFillThunderbolt />
                </span>
                {item}
              </li>
            ))}
            </div>
          </div>
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
