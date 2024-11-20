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
        Tech Stack: Next.js, Supabase, FastAPI, Tailwind CSS, SQLAlchemy&apos;s Alembic, Livekit.
      </h4>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Engineered a client-facing dashboard for voice bot configuration, focusing on STT, TTS, and
          LLM settings. Designed and implemented the backend infrastructure, efficiently managing data, and integrated Livekit to
          facilitate real-time communication with the Voicebot model via WebRTC.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Engaged in building websites for clients with a primary focus on integrating advanced voice bot and chatbot
          models. This enables seamless user interaction through voice and text, enhancing engagement and automating customer
          support.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Additionally, built a content management system (CMS) to allow the client to manage and update website
          content easily, ensuring smooth control over the site’s functionality while maintaining a user-friendly design.
        </li>
        {/* <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Integrated and Rendered a UI component of livekit with the dashboard
          for clients to communicate with Voicebot model using livekit server
          via WebRTC.
        </li> */}
      </ul>
    </motion.div>
  );
};

export default Sayvai;
