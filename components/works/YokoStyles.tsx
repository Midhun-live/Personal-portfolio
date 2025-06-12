import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const YokoStyles = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Full Stack Developer{" "}
        <span className="text-textGreen tracking-wide">@YokoStyles</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        April 2025 - Present{" "}
      </p>
      <h4 className="font-medium text-sm mt-2 font-titleFont">
        Tech Stack: Python, Flask, NiceGUI, Meshcapade API, Microservices Architecture
      </h4>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Engineered comprehensive conversion mechanisms using Python and Flask to transform GarmentCode-generated parametric sewing patterns into 4 industry-standard formats (SVG, PNG, PDF, DXF). Implemented robust file processing pipelines achieving 99.5% accuracy in pattern geometry translation, enabling seamless manufacturing integration.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Integrated Meshcapade API using Python to render parametric garment patterns in 3 dimensional space. Constructed NiceGUI-based user interface for real-time visualization and data transformation logic to process GarmentCode pattern outputs with body measurement parameters for made-to-measure garment creation.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Architected and written 3 independent Flask-based microservices using Python for handling parametric pattern conversion workflows and multi-format export processes. Successfully refactored monolithic pattern processing components into scalable microservices architecture, improving system maintainability and deployment flexibility.
        </li>
      </ul>
    </motion.div>
  );
};

export default YokoStyles; 