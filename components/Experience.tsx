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
        "Own Content Catalog and Metadata Services built with Node.js, Express.js, REST APIs, and Microsoft SQL, enabling ingestion, normalization, and retrieval of thousands of content assets across multi-device OTT platforms.",
        "Integrate VAST/VMAP-based AdTech Workflows with backend services to support server-side and client-side ad delivery, content monetization, and seamless playback experiences.",
        "Drive User Analytics and Personalization Services, processing thousands of playback and session events to power real-time analytics, content recommendations, and audience engagement insights.",
        "Maintain and enhance the beIN Sports Editorial Content Platform across Web, Android, and iOS, supporting multilingual content delivery in 4 languages across multiple global regions.",
        "Contribute scalable backend features using Node.js, Express.js, Microsoft SQL, REST APIs, and Microservices Architecture, ensuring reliable content delivery during high-traffic sporting events."
      ],
      skills: ["Node.js", "Express.js", "Microsoft SQL", "REST APIs", "Microservices"]
    },
    {
      title: "Full Stack Developer",
      company: "Sayvai Software",
      duration: "June 2024 - May 2025",
      points: [
        "Architected a Voice AI Agent Management Platform using Next.js, React, FastAPI, PostgreSQL, STT, TTS, and LLMs, enabling centralized creation and deployment of conversational voice agents.",
        "Designed Multi-Agent Administration Dashboards supporting lifecycle management, deployment configuration, monitoring, and management of multiple AI agents through a unified interface.",
        "Created a CMS and Website Builder Platform using Next.js, FastAPI, Dynamic Routing, and Reusable Components, delivering 6+ reusable modules for page composition and configurable chat and voice integrations.",
        "Developed a Python/Flask-based Parametric Pattern Processing System converting GarmentCode patterns into SVG, PNG, PDF, and DXF formats while preserving production-grade geometric accuracy.",
        "Established a 3D Garment Visualization Platform using Meshcapade API and adopted Microservices Architecture with Flask, Supabase, SQLAlchemy, and Alembic to support scalable rendering and fit-validation workflows."
      ],
      skills: ["Next.js", "React", "FastAPI", "Python", "Flask", "Meshcapade API", "Microservices"]
    },
    {
      title: "Product Engineer Intern",
      company: "Smartail Private Limited",
      duration: "December 2023 - May 2024",
      points: [
        "Redesigned the admin portal for 70+ schools and 65,000+ students, implementing class, subject, syllabus, and publication modules using Angular and Spring Boot.",
        "Built features and resolved major issues across the stack using Angular, Spring Boot, and Flask; delivered 10+ UI components with corresponding APIs and improved application stability.",
        "Utilized Docker for consistent environments and Kafka for real-time data flows, enhancing system reliability."
      ],
      skills: ["Angular", "Spring Boot", "Flask", "Docker", "Kafka"]
    },
    {
      title: "Product Engineer Intern",
      company: "Smartail Private Limited",
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
