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
        "Developed the content catalog & metadata service, designing REST APIs for ingestion, normalization, and retrieval of content feeds; structured service to support multi-device playback workflows and dynamic content discovery.",
        "Implemented an ad insertion pipeline, integrating VAST/VMAP-based ad workflows with backend services to enable server-side and client-side ad delivery, ensuring seamless playback and monetization across OTT streams.",
        "Built a user analytics & personalization service, capturing playback/session events and enabling recommendation logic using LLM/RAG concepts, and exposing APIs for real-time personalized content delivery."
      ],
      skills: ["Node.js", "Express.js", "Kafka", "REST APIs", "Microservices"]
    },
    {
      title: "Full Stack Developer",
      company: "YokoStyles",
      duration: "April 2025 - May 2025",
      points: [
        "Developed a Python/Flask–based parametric pattern export system converting GarmentCode patterns into SVG, PNG, PDF, and DXF with high-accuracy geometry preservation.",
        "Built a 3D garment visualization pipeline using Meshcapade API and a NiceGUI interface for real-time pattern rendering and measurement-driven fit validation.",
        "Refactored the pattern-processing backend into three Flask microservices for pattern parsing, format rendering, and export orchestration, improving modularity and deployment flexibility."
      ],
      skills: ["Python", "Flask", "NiceGUI", "Microservices", "Meshcapade API", "3D Visualization"]
    },
    {
      title: "Full Stack Developer",
      company: "Sayvai Software",
      duration: "June 2024 - May 2025",
      points: [
        "Engineered a CMS platform using Next.js and FastAPI for external clients to create and manage website pages and embed configurable chat/voice agents. Developed 6+ modular components, including dynamic routing, component-driven UI blocks, and backend APIs for page composition and deployment.",
        "Built administrative interfaces that allow non-technical users to configure agent behavior, memory settings, and deployment parameters. Integrated vector search, prompt templating, and RAG-style retrieval pipelines to support contextual and customizable agent responses.",
        "Designed a configuration dashboard for creating and managing voice agents, implementing structured React UI flows and FastAPI endpoints to manage core settings such as STT, TTS, and LLM configuration.",
        "Developed multi-agent management features using Supabase, SQLAlchemy, and Alembic, enabling reliable configuration storage, structured schema updates, and real-time data synchronization across agent instances."
      ],
      skills: ["Next.js", "React", "FastAPI", "Flask", "WebRTC", "Supabase", "SQLAlchemy", "Alembic", "Vector Search", "RAG"]
    },
    {
      title: "Product Engineer Intern",
      company: "Smartail",
      duration: "December 2023 - May 2024",
      points: [
        "Redesigned the admin portal for 70+ schools and 65,000+ students, implementing class, subject, syllabus, and publication modules using Angular and Spring Boot.",
        "Built features and resolved major issues across the stack using Angular, Spring Boot, and Flask; delivered 10+ UI components with corresponding APIs and improved application stability.",
        "Utilized Docker for consistent environments and Kafka for real-time data flows, enhancing system reliability.",
        "Led a major production deployment by coordinating feature integration, stability improvements, and final QA validations. Managed the end-to-end release process, ensuring a smooth rollout for all 70+ schools and their users."
      ],
      skills: ["Angular", "Spring Boot", "Flask", "Docker", "Kafka"]
    },
    {
      title: "Product Engineer Intern",
      company: "Smartail",
      duration: "June 2022 - December 2022",
      points: [
        "Built an image-extraction workflow for subjective and objective questions, integrating MathLive Keyboard and KaTeX for accurate math rendering and extraction from images.",
        "Developed multiple UI components and full pages using Angular, and integrated APIs with a Spring Boot backend to ensure consistent data flow and system functionality."
      ],
      skills: ["Angular", "Spring Boot", "MathLive", "KaTeX"]
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
