import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const Smartail1 = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Product Engineer Intern{" "}
        <span className="text-textGreen tracking-wide">@Smartail Pvt Ltd.</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Dec 2023 - May 2024{" "}
      </p>
      <h4 className="ont-medium text-sm mt-2 font-titleFont">
        Tech Stack: Angular, Java Spring Boot, RESTful API, MongoDB, Docker, Kafka.
      </h4>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Restructured and enhanced the admin portal, serving as the entry point for
the application. This configuration setup manages 70+ schools and 65,000+ students, enabling schools to configure
critical details such as classes, subjects, syllabi, and publications. Built new components and APIs using Angular
(frontend) and Java Spring Boot (backend), ensuring seamless navigation and functionality for school
administrators.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Worked on both frontend (Angular) and backend (Java Spring Boot,
Python Flask) to implement new features, optimize performance, and resolve bugs. Delivered 10+ new UI
components, enhancing user experience. Utilized Docker for containerization and Kafka for real-time data
streaming, improving system reliability and scalability.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Led a major production deployment, coordinating with the development team to
    roll out new features, improve stability, and resolve critical issues. Successfully managed the release process,
    ensuring a smooth transition to the live environment for all 70+ schools and their users.
        </li>
      </ul>
    </motion.div>
    
  );
};

export default Smartail1;
