import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const Sayvai = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Software Developer{" "}
        <span className="text-textGreen tracking-wide">@Sayvai Softwares</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Jun 2024 - Present{" "}
      </p>
      <h4 className="ont-medium text-sm mt-2 font-titleFont">
        Tech Stack: Next.js, Supabase, FastAPI, Tailwind CSS, SQLAlchemy's Alembic, Livekit.
      </h4>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Developed a dashboard which is a full-fledged client interface for the
          voice bot configuration using Next.js and tailwind css.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Worked with Supabase database and Developed the backend using FastAPI{" "}
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Utilized the ORM tool SQLAlchemy's Alembic for database migration and
          to manage the database schema
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Integrated and Rendered a UI component of livekit with the dashboard
          for clients to communicate with Voicebot model using livekit server
          via WebRTC.
        </li>
      </ul>
    </motion.div>
  );
};

export default Sayvai;
