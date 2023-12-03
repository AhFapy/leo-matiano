import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SectionWrapper } from "../hoc";
import { styles } from "../style";
import {
  faCss3Alt,
  faHtml5,
  faJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

const Tech = () => {
  return (
    <>
      <main
        id="main-tech"
        className="text-white text-[5vw] flex flex-col justify-center items-center h-screen mb-[15rem]"
      >
        <div className="pt-[3vh] flex flex-col items-center mt-[6vh] w-[90vw] h-[40vh]">
          <div>
            <p className={`${styles.sectionSubText} text-center`}>The Plan</p>

            <h1 className={`${styles.sectionHeadText} text-center`}>
              What we'll do. Together 🛠️
              <br />
              <div className="w-full flex justify-center mt-[2rem]">
                <iframe
                  className="w-[75vw] h-[75vh]"
                  src="https://youtu.be/bN_CGGWe4bo?si=7GbNLObLjhCA_9Ei"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>{" "}
              </div>
            </h1>
          </div>
        </div>
      </main>
    </>
  );
};

export default SectionWrapper(Tech, "plan");
