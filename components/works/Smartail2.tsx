import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const Smartail2 = () => {
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
        Jun 2022 - Dec 2022{" "}
      </p>
      <h4 className="font-medium text-sm mt-2 font-titleFont">
        Tech Stack: Angular, Java Spring Boot, RESTful API, MongoDB, Docker.
      </h4>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Worked on a frontend image extraction mechanism for 2 types of questions: subjective
and objective, streamlining the extraction process. Added MathLive Keyboard and KaTeX for rendering
mathematical equations, enabling accurate extraction and display of math questions from images., reducing image
          processing and report generation time significantly.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Designed and implemented various UI components and complete pages using
Angular. Created and integrated multiple APIs with Java Spring Boot backend to ensure seamless data flow and
functionality between the frontend and backend systems.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Identified and resolved 30+ UI and functionality-related bugs, improving the
overall user experience. Optimized existing features for better performance and stability, ensuring a smooth and reliable
application.
        </li>
      </ul>
    </motion.div>
  );
};

export default Smartail2;
