import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../style";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img
            src={icon}
            alt={title}
            className="w-16 h-16 object-contain"
          ></img>
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
        className="flex justify-center items-center flex-col"
      >
        <p className={`${styles.sectionSubText} text-center`}>
          Accomplish Dreams
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Our mission</h2>
        <motion.p
          variants={fadeIn("", "", 0, 1)}
          className="mt-4 text-white text-center flex-center text-[35px] max-w-3xl leading-[30px] font-bold"
        >
          <br />
          Optimize <span className="text-[#3d85c6] font-bold">Body</span> <br />
          <br />
          <span className="text-[27px] text-secondary font-semibold">
            Biohacking, Exercise, Sleep, Diet, Energy
          </span>{" "}
          <br />
          <br />
          <br />
          Optimize <span className="text-[#3d85c6] font-bold">Mind</span> <br />
          <br />
          <span className="text-[27px] text-secondary font-semibold">
            Focus, Memory, Cognitive Abilities, Perspicacity{" "}
          </span>{" "}
          <br />
          <br />
          <br />
          Optimize <span className="text-[#3d85c6] font-bold">Future</span>{" "}
          <br />
          <br />
          <span className="text-[27px] text-secondary font-semibold">
            Habits, Discipline, Willpower, Lifestyle, Goals
          </span>{" "}
          <br />
          <br />
          <br />
          Optimize <span className="text-[#3d85c6] font-bold">Life</span> <br />
          <br />
          <span className="text-[27px] text-secondary font-semibold">
            Looks, Style, Confidence, Purpose, Drive, Work
          </span>{" "}
          <br />
          <br />
          <br />
          <br />
          Two Weeks. <span className="text-[#3d85c6] font-bold">
            Free.
          </span>{" "}
          <br />
        </motion.p>

        <div className="mt-20 flex flex-wrap gap-10 justify-center">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(About, "about");
