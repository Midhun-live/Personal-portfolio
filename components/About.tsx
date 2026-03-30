import { AiFillThunderbolt } from "react-icons/ai";
import SectionTtile from "./SectionTitle";
import Image from "next/image";
import { profile } from "@/public/assets";
import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "../utils/motion";

const About = () => {
  const languages = ["C", "Java", "Python", "JavaScript", "TypeScript", "SQL"];
  const frameworks = ["Angular", "React", "Next.js", "Node.js", "Express", "Spring Boot", "Tailwind CSS"];
  const databases = ["PostgreSQL", "MySQL", "Supabase"];
  const tools = ["Git", "SQLAlchemy", "Alembic", "Docker", "Livekit", "Kafka"]
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      id="about"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
      <motion.div variants={fadeInUp}><SectionTtile title="About Me" titleNumber="01" /></motion.div>
      <div className="flex flex-col lgl:flex-row gap-16">
        <motion.div
          variants={fadeInUp}
          className="w-full lgl:w-2/3 text-base text-textDark font-medium flex
        flex-col gap-4"
        >
          <p>
            I am a full-stack developer passionate about creating smooth, efficient, and
            visually engaging web applications. I thrive on solving complex backend challenges
            and translating them into intuitive user interfaces that people love to use.
          </p>
          <p>
            When I&apos;m not at my desk coding, I enjoy exploring the outdoors, analyzing my next move
            in a game of chess, or exploring the world of music by learning new instruments like the flute.
          </p>
          <p>Here are the technologies I work with:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4 font-titleFont">
            <div className="glass-card p-4 hover:shadow-[0_0_15px_rgba(100,255,218,0.15)] transition-shadow">
              <h6 className="text-md text-textLight font-semibold tracking-wide mb-3 flex items-center gap-2"><span className="text-textGreen"><AiFillThunderbolt /></span>Languages</h6>
              <div className="flex flex-wrap gap-2">
                {languages.map((item, i) => (
                  <span key={i} className="bg-textGreen/10 text-textGreen border border-textGreen/20 px-3 py-1 rounded-full text-xs hover:bg-textGreen/20 transition-colors cursor-default">{item}</span>
                ))}
              </div>
            </div>
            <div className="glass-card p-4 hover:shadow-[0_0_15px_rgba(100,255,218,0.15)] transition-shadow">
              <h6 className="text-md text-textLight font-semibold tracking-wide mb-3 flex items-center gap-2"><span className="text-textGreen"><AiFillThunderbolt /></span>Frameworks</h6>
              <div className="flex flex-wrap gap-2">
                {frameworks.map((item, i) => (
                  <span key={i} className="bg-textGreen/10 text-textGreen border border-textGreen/20 px-3 py-1 rounded-full text-xs hover:bg-textGreen/20 transition-colors cursor-default">{item}</span>
                ))}
              </div>
            </div>
            <div className="glass-card p-4 hover:shadow-[0_0_15px_rgba(100,255,218,0.15)] transition-shadow">
              <h6 className="text-md text-textLight font-semibold tracking-wide mb-3 flex items-center gap-2"><span className="text-textGreen"><AiFillThunderbolt /></span>Databases</h6>
              <div className="flex flex-wrap gap-2">
                {databases.map((item, i) => (
                  <span key={i} className="bg-textGreen/10 text-textGreen border border-textGreen/20 px-3 py-1 rounded-full text-xs hover:bg-textGreen/20 transition-colors cursor-default">{item}</span>
                ))}
              </div>
            </div>
            <div className="glass-card p-4 hover:shadow-[0_0_15px_rgba(100,255,218,0.15)] transition-shadow">
              <h6 className="text-md text-textLight font-semibold tracking-wide mb-3 flex items-center gap-2"><span className="text-textGreen"><AiFillThunderbolt /></span>Tools</h6>
              <div className="flex flex-wrap gap-2">
                {tools.map((item, i) => (
                  <span key={i} className="bg-textGreen/10 text-textGreen border border-textGreen/20 px-3 py-1 rounded-full text-xs hover:bg-textGreen/20 transition-colors cursor-default">{item}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div variants={fadeInUp} className="w-full lg:w-1/3 relative group mt-10 lg:mt-0">
          <div className="w-full aspect-square rounded-2xl bg-white/5 p-4 border border-white/10 hover:border-textGreen/30 transition-colors duration-500">
            <div className="w-full h-full relative rounded-xl overflow-hidden bg-white mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-500 shadow-xl">
              <Image
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src={profile}
                alt="profileImg"
                fill
              />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
