import React from "react";
import SectionTitle from "./SectionTitle";

const Experience = () => {
  return (
    <section
      id="experience"
      className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4"
    >
      <SectionTitle title="Where I have Worked" titleNumber="02" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul>
          <li
            className="border-1-2 border-1-textGrren text-textDark bg-transparent hover:bg-[#112240] py-3 text-sm
            cursor-pointer duration-300 px-8 font-medium"
          >
            Smartail
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
