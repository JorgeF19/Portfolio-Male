import { Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ArrowContainerComponent from "../components/ArrowContainer.jsx";

import ProjectContainerComponent from "../components/ProjectContainer.jsx";
import ProjectContainerVerticalComponent from "../components/ProjectContainerVertical.jsx";
import { motion } from "framer-motion";
import "../App.css";

function Gallery() {
  const MotionContainer = motion(ProjectContainerVerticalComponent);
  //   const location = useLocation();
  //   const [paused, setPaused] = useState(true);
  //   const playerRef = useRef(null);
  return (
    <AnimatePresence mode="wait">
      <motion.div
        id="galleryPage"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ type: "spring", stiffness: 80 }}
        style={{
          padding: "2rem",
          position: "relative",
          overflow: "scroll",
        }}
      >
        <h1 className="title">Portfolio</h1>
        <Link id="backArrowLinkGallery" to="/secondary">
          <ArrowContainerComponent>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#ffffff"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M6 12H18M6 12L11 7M6 12L11 17"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
              </g>
            </svg>
          </ArrowContainerComponent>
        </Link>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ diration: 0.5, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <ProjectContainerComponent
            src="src/img/6amProject.png"
            alt="6am Project"
            title="6:00 AM"
            description="Lorem ipsum dolor sit amet consectetur. Eleifend felis sagittis cras malesuada porta nec condimentum a diam. Tellus sed gravida turpis non odio commodo rutrum at."
          ></ProjectContainerComponent>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <ProjectContainerVerticalComponent
            src="src/img/hardTimes.png"
            alt="Hard times project"
            title="HARD TIMES"
            description="Nisi consequat sint id reprehenderit est ex occaecat."
          ></ProjectContainerVerticalComponent>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default Gallery;
