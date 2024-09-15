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
          Managed the admin login by completely restructuring the existing
          components and building new ones.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Worked in Angular, Java Spring Boot, RESTful API,MongoDB, Kafka.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Seamlessly managed a major production release with main features in
          the admin login and fixed 30+ bugs in 6 months across 10+ UI
          components.
        </li>
      </ul>
    </motion.div>
  );
};

export default Smartail1;
