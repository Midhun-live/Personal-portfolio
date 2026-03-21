import React from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeInUp, buttonVariants } from "../utils/motion";

interface props {
  sendEmail: any;
}

const Contact = ({ sendEmail }: props) => {
  const email = "midhunchakkaravarthy07@gmail.com";
  const subject = encodeURIComponent("Inquiry from your portfolio");
  const body = encodeURIComponent("I saw your portfolio and would like to discuss potential opportunities. Looking forward to connecting!");

  // Mailto link with subject and body
  const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      id="contact"
      className="max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-4
  items-center justify-center relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-textGreen/5 rounded-full blur-[120px] pointer-events-none -z-10" />
      <motion.p
        variants={fadeInUp}
        className="font-titleFont text-lg text-textGreen font-semibold flex
        items-center tracking-wide"
      >
        04. What&apos;s Next?
      </motion.p>
      <motion.h2 variants={fadeInUp} className="font-titleFont text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-textLight to-textDark">Get In Touch</motion.h2>
      <motion.p variants={fadeInUp} className="max-w-[600px] text-center  text-textDark">
        I am open to new opportunities and would be glad to hear back from you.
        Be it a question or just wanting to say hello, feel free to reach out to me and 
        I will do my very best to get back to you!
      </motion.p>
      <motion.a href={mailtoLink} variants={fadeInUp}>
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          className="w-40 h-14 bg-textGreen/10 border border-textGreen mt-6 font-titleFont text-sm
        text-textGreen tracking-wider rounded-md hover:bg-textGreen hover:text-bodyColor shadow-[0_0_15px_rgba(100,255,218,0.2)] hover:shadow-[0_0_20px_rgba(100,255,218,0.5)] transition-colors duration-300"
        >
          Say Hello!
        </motion.button>
      </motion.a>
    </motion.section>
  );
};

export default Contact;
