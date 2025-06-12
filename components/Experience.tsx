import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
import Sayvai from "./works/Sayvai";
import Smartail1 from "./works/Smartail1";
import Smartail2 from "./works/Smartail2";
import YokoStyles from "./works/YokoStyles";
import ParticlesComponent from "./Particles";

const Experience = () => {
  const [yokostyles, setYokoStyles] = useState(true);
  const [sayvai, setSayvai] = useState(false);
  const [smartail1, setSmartail1] = useState(false);
  const [smartail2, setSmartail2] = useState(false);

  const handleYokoStyles = () => {
    setYokoStyles(true);
    setSayvai(false);
    setSmartail1(false);
    setSmartail2(false);
  };

  const handleSayvai = () => {
    setYokoStyles(false);
    setSayvai(true);
    setSmartail1(false);
    setSmartail2(false);
  };

  const handleSmartail1 = () => {
    setYokoStyles(false);
    setSayvai(false);
    setSmartail1(true);
    setSmartail2(false);
  };

  const handleSmartail2 = () => {
    setYokoStyles(false);
    setSayvai(false);
    setSmartail1(false);
    setSmartail2(true);
  };

  return (
    <section
      id="experience"
      className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4"
    >
      <SectionTitle title="Experiences" titleNumber="02" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 flex flex-col">
          <li
            onClick={handleYokoStyles}
            className={`${
              yokostyles
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm
            cursor-pointer duration-300 px-8 font-medium`}
          >
            YokoStyles
          </li>
          <li
            onClick={handleSayvai}
            className={`${
              sayvai
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm
            cursor-pointer duration-300 px-8 font-medium`}
          >
            Sayvai
          </li>
          <li
            onClick={handleSmartail1}
            className={`${
              smartail1
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm
              cursor-pointer duration-300 px-8 font-medium`}
          >
            Smartail - 2024
          </li>
          <li
            onClick={handleSmartail2}
            className={`${
              smartail2
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm
              cursor-pointer duration-300 px-8 font-medium`}
          >
            Smartail - 2022
          </li>
        </ul>
        {yokostyles && <YokoStyles />}
        {sayvai && <Sayvai />}
        {smartail1 && <Smartail1 />}
        {smartail2 && <Smartail2 />}
      </div>
    </section>
  );
};

export default Experience;
