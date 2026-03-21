import React from "react";
import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";
import { staggerContainer, fadeInUp } from "../utils/motion";

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Tata Elxsi",
      duration: "June 2025 - Present",
      points: [
        "Currently part of the Transportation Business Unit (TBU), undergoing structured training on workflows and domain systems.",
        "Gaining hands-on exposure to enterprise-grade systems and preparing for active project contributions."
      ],
      skills: ["Enterprise Systems", "Domain Workflows"]
    },
    {
      title: "Full Stack Developer",
      company: "YokoStyles",
      duration: "April 2025 - May 2025",
      points: [
        "Built a parametric garment pattern export system using Python and Flask, supporting SVG, PNG, PDF, and DXF formats.",
        "Developed a 3D visualization pipeline using Meshcapade API and NiceGUI for real-time garment rendering.",
        "Refactored backend into microservices for pattern parsing, rendering, and export orchestration."
      ],
      skills: ["Python", "Flask", "NiceGUI", "Microservices", "3D Visualization"]
    },
    {
      title: "Full Stack Developer",
      company: "Sayvai Software",
      duration: "June 2024 - May 2025",
      points: [
        "Built a CMS platform using Next.js and FastAPI with dynamic page composition and modular UI blocks.",
        "Developed AI-powered agent configuration systems with RAG pipelines and vector search.",
        "Integrated LiveKit WebRTC for real-time audio communication.",
        "Designed dashboards for managing voice and chat agents."
      ],
      skills: ["Next.js", "FastAPI", "WebRTC", "AI Agents", "RAG"]
    },
    {
      title: "Product Engineer Intern",
      company: "Smartail",
      duration: "Dec 2023 - May 2024",
      points: [
        "Redesigned admin platform used by 70+ schools and 65,000+ users.",
        "Built multiple UI modules and backend APIs using Angular and Spring Boot.",
        "Improved system stability and contributed to production deployment."
      ],
      skills: ["Angular", "Spring Boot", "System Stability"]
    },
    {
      title: "Product Engineer Intern",
      company: "Smartail",
      duration: "June 2022 - Dec 2022",
      points: [
        "Built image-based question extraction system with MathLive and KaTeX.",
        "Developed UI pages and integrated backend APIs."
      ],
      skills: ["MathLive", "KaTeX", "Backend APIs"]
    }
  ];

  return (
    <motion.section 
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      id="experience" 
      className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4"
    >
      <motion.div variants={fadeInUp}><SectionTitle title="Experiences" titleNumber="02" /></motion.div>
      <div className="w-full mt-10 flex flex-col gap-10 relative">
        {/* Timeline Line */}
        <motion.div 
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "linear" }}
          className="absolute w-[2px] h-full bg-textGreen/20 left-[19px] md:left-[11px] top-0 origin-top"
        ></motion.div>
        
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            className="flex flex-col md:flex-row gap-6 md:gap-8 relative pl-12 md:pl-12 group"
          >
            {/* Timeline Dot */}
            <div className="absolute left-[11px] md:left-[3px] top-1.5 w-5 h-5 bg-bodyColor border-2 border-textGreen rounded-full group-hover:bg-textGreen group-hover:shadow-[0_0_10px_rgba(100,255,218,0.5)] transition-all duration-300"></div>
            
            {/* Content Card */}
            <div className="w-full glass-card p-6 md:p-8 hover:shadow-[0_0_20px_rgba(100,255,218,0.15)] transition-shadow duration-300">
              <h3 className="flex flex-col md:flex-row md:items-center gap-2 text-xl font-titleFont font-bold text-textLight">
                {exp.title}
                <span className="hidden md:inline-block text-textGreen">@</span>
                <span className="text-textGreen">{exp.company}</span>
              </h3>
              <p className="text-sm text-textDark font-medium mt-1 tracking-wide">
                {exp.duration}
              </p>
              
              <ul className="mt-4 flex flex-col gap-3">
                {exp.points.map((point, i) => (
                  <li key={i} className="text-base flex gap-2 text-textDark">
                    <span className="text-textGreen mt-1 min-w-[16px]"><TiArrowForward /></span>
                    {point}
                  </li>
                ))}
              </ul>
              
              <div className="flex gap-2 flex-wrap mt-6">
                {exp.skills.map((skill, i) => (
                  <span key={i} className="bg-textGreen/10 border border-textGreen/20 text-textGreen text-xs px-3 py-1 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Experience;
