import { Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ArrowContainerComponent from "../components/ArrowContainer.jsx";

import ProjectContainerComponent from "../components/ProjectContainer.jsx";
import ProjectContainerVerticalComponent from "../components/ProjectContainerVertical.jsx";
import { motion } from "framer-motion";
import "../App.css";

function Gallery() {
  const MotionContainer = motion.create(ProjectContainerVerticalComponent);
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
          viewport={{ once: true, amount: 0.3 }}
        >
          <ProjectContainerComponent
            src="img/6amProject.png"
            alt="6am Project"
            title="6:00 AM"
            description="This is a look to my daily routine, what I do every day, every week, every month and i try to make it look as aesthetic as possible "
            projectLink="https://www.instagram.com/reel/DKsdwOxOutF/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA=="
          ></ProjectContainerComponent>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <ProjectContainerVerticalComponent
            src="img/hardTimes.png"
            alt="Hard times project"
            title="HARD TIMES"
            description="This time I try to desmotrate that is normal the fact that things sometimes (most of the time) don't go well, it's just a matter of be aware and consistent."
            projectLink="https://www.instagram.com/reel/DKYCEOnAY2t/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
          ></ProjectContainerVerticalComponent>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default Gallery;
