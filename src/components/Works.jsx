import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../style";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const Works = () => {
  const handleWindow = function (link) {
    window.open(link);
  };

  return (
    <>
      <motion.div
        variants={textVariant()}
        className="flex justify-center items-center flex-col"
      >
        <p className={`${styles.sectionSubText} text-center`}>Let's Talk</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Book a Call.
        </h2>
      </motion.div>

      <div className="w-full flex justify-center"></div>
    </>
  );
};

export default SectionWrapper(Works, "book");
