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
        Software Developer Consultant{" "}
        <span className="text-textGreen tracking-wide">@Smartail Pvt Ltd.</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Jun 2024 - Present{" "}
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Sample to find out the cause of india in the world of honour ajith
          kumar
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Sample to find out the cause of india in the world of honour ajith
          kumar
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Sample to find out the cause of india in the world of honour ajith
          kumar
        </li>
      </ul>
    </motion.div>
  );
};

export default Smartail1;
