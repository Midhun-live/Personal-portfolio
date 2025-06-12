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
        Full Stack Developer{" "}
        <span className="text-textGreen tracking-wide">@Sayvai Softwares</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        June 2024 - March 2025{" "}
      </p>
      <h4 className="ont-medium text-sm mt-2 font-titleFont">
        Tech Stack: Next.js, Supabase, FastAPI, Tailwind CSS, SQLAlchemy&apos;s Alembic, Livekit.
      </h4>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Developed a client-facing dashboard to configure 3 core functionalities:
Speech-to-Text (STT), Text-to-Speech (TTS), and Large Language Model (LLM) settings. Incorporated
Livekit for real-time communication via WebRTC, enabling low-latency audio streaming for seamless voice interactions.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Designed and deployed the dashboard which has
features to create custom voice agents. Utilized Supabase, SQLAlchemy, and Alembic for efficient database
management and schema migrations, enabling clients to manage and scale their voice agents effortlessly.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Built a custom CMS platform from scratch using React.js and FastAPI, enabling
users to create and manage websites. Integrated the proprietary Voicebot and Chatbot models into the CMS, enabling
clients to embed and configure these models directly into their websites. Leveraged Supabase for real-time database
updates and streamlined content management.
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
