import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../style";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { useEffect } from "react";

const Works = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;

    document.body.appendChild(script);

    return () => {
      // Limpiar el script si el componente se desmonta
      document.body.removeChild(script);
    };
  }, []); // El array vacío asegura que esto solo se ejecute una vez al montar el componente

  return (
    <>
      <motion.div
        variants={textVariant()}
        className="flex justify-center items-center flex-col"
      >
        <p className={`${styles.sectionSubText} text-center`}>Let's Talk</p>
        <h2 className={`${styles.sectionHeadText} text-center mb-[2rem]`}>
          Book a Call. 
        </h2>
      </motion.div>

      <div className="w-full flex justify-center">
      <div className="calendly-inline-widget min-w-[320px] w-full h-[700px]" data-url="https://calendly.com/leomatianorubin?hide_landing_page_details=1&hide_gdpr_banner=1" style={{ minWidth: '320px', height: '700px' }}>
      </div>

      </div>
    </>
  );
};

export default SectionWrapper(Works, "book");
