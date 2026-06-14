import { AiFillThunderbolt } from "react-icons/ai";
import { FaCode, FaLaptopCode, FaDatabase, FaTools, FaCubes } from "react-icons/fa";
import SectionTitle from "./SectionTitle";
import Image from "next/image";
import { profile } from "@/public/assets";
import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "../utils/motion";

const About = () => {
  const languages = ["C", "Java", "Python", "JavaScript", "TypeScript", "SQL"];
  const frameworks = [
    "Angular",
    "React",
    "React Hooks",
    "Redux",
    "Next.js",
    "Node.js",
    "Express.js",
    "FastAPI",
    "Flask",
    "Spring Boot",
    "Tailwind CSS",
    "LangChain",
    "SQLAlchemy",
    "Alembic"
  ];
  const databases = [
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "Microsoft SQL Server",
    "Supabase",
    "Vector Databases"
  ];
  const tools = [
    "AWS",
    "Azure",
    "Azure DevOps",
    "Docker",
    "Kubernetes",
    "Git",
    "Kafka",
    "Postman",
    "WebSockets",
    "CI/CD"
  ];
  const core = [
    "MERN Stack",
    "REST API Design",
    "Microservices Architecture",
    "Distributed Systems",
    "Event-Driven Architecture",
    "System Design"
  ];

  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      id="about"
      className="max-w-containerSmall mx-auto py-10 lgl:py-24 px-4"
    >
      <motion.div variants={fadeInUp}>
        <SectionTitle title="About Me" titleNumber="01" />
      </motion.div>

      <div className="grid grid-cols-1 lgl:grid-cols-12 gap-6 mt-10">
        {/* Profile and Bio Card */}
        <motion.div
          variants={fadeInUp}
          className="col-span-1 lgl:col-span-4 flex flex-col justify-between glass-card p-6 border border-glassBorder hover:border-textGreen/20 hover:shadow-[0_0_25px_rgba(100,255,218,0.15)] transition-all duration-300 group"
        >
          <div>
            <div className="relative w-32 h-32 mx-auto rounded-full p-[3px] bg-gradient-to-tr from-textGreen via-emerald-500 to-cyan-500 shadow-[0_0_20px_rgba(100,255,218,0.2)] group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full relative rounded-full overflow-hidden bg-bodyColor">
                <Image
                  className="w-full h-full object-cover"
                  src={profile}
                  alt="profileImg"
                />
              </div>
            </div>
            <h3 className="text-xl font-bold text-center mt-5 text-textLight font-titleFont">
              Midhun Chakkaravarthy K
            </h3>
            <p className="text-xs text-textGreen font-semibold tracking-widest text-center uppercase mt-1">
              Full Stack AI Developer
            </p>
            <p className="text-xs text-center text-textDark mt-3 italic font-medium px-2">
              Coimbatore Institute of Technology Alumni
            </p>
          </div>

          <div className="mt-6 pt-6 border-t border-glassBorder text-center">
            <div>
              <p className="text-2xl font-bold text-textGreen">3+</p>
              <p className="text-[10px] text-textDark uppercase tracking-wider font-bold">Years Exp.</p>
            </div>
          </div>
        </motion.div>

        {/* Right Bento Grid Section */}
        <motion.div
          variants={fadeInUp}
          className="col-span-1 lgl:col-span-8 grid grid-cols-1 sm:grid-cols-6 gap-4"
        >
          {/* Who I Am Card */}
          <div className="sm:col-span-6 glass-card p-5 border border-glassBorder hover:border-textGreen/20 hover:shadow-[0_0_15px_rgba(100,255,218,0.1)] transition-all duration-300">
            <h4 className="text-sm text-textLight font-bold mb-3 flex items-center gap-2 uppercase tracking-wider">
              <span className="text-textGreen text-base"><AiFillThunderbolt /></span>
              Who I Am
            </h4>
            <div className="text-sm text-textDark space-y-2 leading-relaxed font-medium">
              <p>
                I am a Full Stack AI Developer passionate about creating smooth, efficient, and
                visually engaging applications powered by intelligent systems. I thrive on architecting
                voice AI agents, integrating LLMs/RAG workflows, solving complex backend challenges,
                and translating them into intuitive user interfaces.
              </p>
              <p>
                When I&apos;m not building AI solutions or coding at my desk, I enjoy exploring the outdoors,
                analyzing my next move in a game of chess, or learning new instruments like the flute.
              </p>
            </div>
          </div>

          {/* Frameworks & Libraries (Wide Card) */}
          <div className="sm:col-span-6 glass-card p-5 border border-glassBorder hover:border-[#2dd4bf]/20 hover:shadow-[0_0_15px_rgba(45,212,191,0.1)] transition-all duration-300">
            <h4 className="text-sm text-textLight font-bold mb-3 flex items-center gap-2 uppercase tracking-wider">
              <span className="text-[#2dd4bf] text-base"><FaLaptopCode /></span>
              Frameworks & Libraries
            </h4>
            <div className="flex flex-wrap gap-1.5 mt-2">
              {frameworks.map((item, i) => (
                <span
                  key={i}
                  className="bg-[#2dd4bf]/5 text-[#2dd4bf] border border-[#2dd4bf]/15 px-2.5 py-1 rounded text-xs hover:bg-[#2dd4bf]/15 hover:scale-105 transition-all duration-200 cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="sm:col-span-3 glass-card p-5 border border-glassBorder hover:border-[#22d3ee]/20 hover:shadow-[0_0_15px_rgba(34,211,238,0.1)] transition-all duration-300">
            <h4 className="text-sm text-textLight font-bold mb-3 flex items-center gap-2 uppercase tracking-wider">
              <span className="text-[#22d3ee] text-base"><FaCode /></span>
              Languages
            </h4>
            <div className="flex flex-wrap gap-1.5 mt-2">
              {languages.map((item, i) => (
                <span
                  key={i}
                  className="bg-[#22d3ee]/5 text-[#22d3ee] border border-[#22d3ee]/15 px-2.5 py-1 rounded text-xs hover:bg-[#22d3ee]/15 hover:scale-105 transition-all duration-200 cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Databases */}
          <div className="sm:col-span-3 glass-card p-5 border border-glassBorder hover:border-[#818cf8]/20 hover:shadow-[0_0_15px_rgba(129,140,248,0.1)] transition-all duration-300">
            <h4 className="text-sm text-textLight font-bold mb-3 flex items-center gap-2 uppercase tracking-wider">
              <span className="text-[#818cf8] text-base"><FaDatabase /></span>
              Databases
            </h4>
            <div className="flex flex-wrap gap-1.5 mt-2">
              {databases.map((item, i) => (
                <span
                  key={i}
                  className="bg-[#818cf8]/5 text-[#818cf8] border border-[#818cf8]/15 px-2.5 py-1 rounded text-xs hover:bg-[#818cf8]/15 hover:scale-105 transition-all duration-200 cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="sm:col-span-3 glass-card p-5 border border-glassBorder hover:border-[#f472b6]/20 hover:shadow-[0_0_15px_rgba(244,114,182,0.1)] transition-all duration-300">
            <h4 className="text-sm text-textLight font-bold mb-3 flex items-center gap-2 uppercase tracking-wider">
              <span className="text-[#f472b6] text-base"><FaTools /></span>
              Tools
            </h4>
            <div className="flex flex-wrap gap-1.5 mt-2">
              {tools.map((item, i) => (
                <span
                  key={i}
                  className="bg-[#f472b6]/5 text-[#f472b6] border border-[#f472b6]/15 px-2.5 py-1 rounded text-xs hover:bg-[#f472b6]/15 hover:scale-105 transition-all duration-200 cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Core */}
          <div className="sm:col-span-3 glass-card p-5 border border-glassBorder hover:border-[#fb923c]/20 hover:shadow-[0_0_15px_rgba(251,146,60,0.1)] transition-all duration-300">
            <h4 className="text-sm text-textLight font-bold mb-3 flex items-center gap-2 uppercase tracking-wider">
              <span className="text-[#fb923c] text-base"><FaCubes /></span>
              Core
            </h4>
            <div className="flex flex-wrap gap-1.5 mt-2">
              {core.map((item, i) => (
                <span
                  key={i}
                  className="bg-[#fb923c]/5 text-[#fb923c] border border-[#fb923c]/15 px-2.5 py-1 rounded text-xs hover:bg-[#fb923c]/15 hover:scale-105 transition-all duration-200 cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
