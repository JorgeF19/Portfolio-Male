import { Routes, Route, useLocation, Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import YouTube from "react-youtube";
import ContainerComponent from "../components/container.jsx";
import ParagraphComponent from "../components/Paragraph.jsx";
import socialImg from "../img/social.png";
import ArrowContainerComponent from "../components/ArrowContainer.jsx";
import App from "../App.jsx";

function SecondaryPage() {
  const [paused, setPaused] = useState(true);
  const playerRef = useRef(null);
  const MotionContainer = motion(ContainerComponent);
  const onPause = () => setPaused(true);
  const onPlay = () => setPaused(false);
  const location = useLocation();
  const handleResume = () => {
    setPaused(false);
    if (playerRef.current) {
      playerRef.current.internalPlayer.playVideo();
    }
  };

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ type: "spring", stiffness: 80 }}
              style={{
                width: "100%",

                background: "#222",
                color: "#fff",
                position: "relative",
              }}
            >
              <section id="firstProject">
                <motion.div
                  id="firstProjectContainer"
                  initial={false}
                  animate={{ opacity: paused ? 1 : 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  style={{
                    backgroundColor: "rgba(22, 5, 70, 0.4)",
                    borderRadius: "20px",
                    flexShrink: "0",
                    backdropFilter: "blur(6px)",
                    textOrientation: "mixed",
                    padding: "1rem",
                    display: "flex",
                    textAlign: "center",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <h1 className="title">First Project</h1>
                  <ParagraphComponent className="projectDescription">
                    One of her first projects was one inspired in the series
                    “euphoria”, uploaded to her YouTube account in 2024.
                  </ParagraphComponent>
                </motion.div>
                <motion.div
                  id="linkContainer"
                  initial={false}
                  animate={{ opacity: paused ? 1 : 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Link id="backArrowLink" to="/">
                    <ArrowContainerComponent>
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="#ffffff"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
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
                </motion.div>
              </section>
              <div id="videoContainer" style={{ position: "relative" }}>
                <YouTube
                  videoId="krjSNitm6Uc"
                  id="videoContainer"
                  opts={{
                    width: "100%",
                    height: "100%",
                    playerVars: { autoplay: 0 },
                  }}
                  onPause={onPause}
                  onPlay={onPlay}
                  ref={playerRef}
                />
                {paused && (
                  <motion.div
                    id="pauseCoverContainer"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div
                      id="coverImage"
                      style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        background: `rgba(0,0,0,0.8) url(${socialImg}) center/cover no-repeat`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",

                        flexDirection: "column",

                        transform: "scale(1.3)",
                      }}
                    ></div>
                    <button id="resumeButton" onClick={handleResume}>
                      Play
                    </button>
                  </motion.div>
                )}
              </div>
            </motion.div>
          }
        ></Route>
        <Route path="/" element={<App />}></Route>
      </Routes>
    </AnimatePresence>
  );
}

export default SecondaryPage;
