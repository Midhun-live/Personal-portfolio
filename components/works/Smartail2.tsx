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
          Implemented an AI-powered image extraction mechanism, reducing image
          processing and report generation time significantly.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Utilized advanced image processing techniques for accurate extraction
          of questions from images, surpassing manual methods.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Developed various UI features and APIs for seamless integration and
          streamlined data exchange, while also resolving bugs.
        </li>
      </ul>
    </motion.div>
  );
};

export default Smartail2;
