import { Routes, Route, Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import YouTube from "react-youtube";
import ContainerComponent from "../components/container.jsx";
import ParagraphComponent from "../components/Paragraph.jsx";
import socialImg from "../img/social.png";
import ArrowContainerComponent from "../components/ArrowContainer.jsx";
import Gallery from "./gallery.jsx";
import App from "../App.jsx";

function SecondaryPage() {
  const [paused, setPaused] = useState(true);
  const playerRef = useRef(null);
  const MotionContainer = motion(ContainerComponent);
  const onPause = () => setPaused(true);
  const onPlay = () => setPaused(false);

  const handleResume = () => {
    setPaused(false);
    if (playerRef.current) {
      playerRef.current.internalPlayer.playVideo();
    }
  };

  return (
    <AnimatePresence mode="wait">
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
              padding: "2rem",
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

          <motion.div
            id="galleryArrowContainer"
            initial={false}
            animate={{ opacity: paused ? 1 : 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link id="galleryArrowLink" to="/gallery">
              <ArrowContainerComponent>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="61"
                  height="59"
                  viewBox="0 0 61 59"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.8125 29.5C3.8125 29.011 4.01334 28.542 4.37083 28.1963C4.72832 27.8505 5.21318 27.6562 5.71875 27.6562H50.6796L38.6816 16.0554C38.3237 15.7092 38.1226 15.2396 38.1226 14.75C38.1226 14.2604 38.3237 13.7908 38.6816 13.4446C39.0396 13.0984 39.525 12.9039 40.0312 12.9039C40.5375 12.9039 41.0229 13.0984 41.3809 13.4446L56.6309 28.1946C56.8084 28.3659 56.9492 28.5693 57.0453 28.7933C57.1414 29.0173 57.1909 29.2575 57.1909 29.5C57.1909 29.7425 57.1414 29.9826 57.0453 30.2066C56.9492 30.4306 56.8084 30.6341 56.6309 30.8054L41.3809 45.5554C41.0229 45.9016 40.5375 46.0961 40.0312 46.0961C39.525 46.0961 39.0396 45.9016 38.6816 45.5554C38.3237 45.2092 38.1226 44.7396 38.1226 44.25C38.1226 43.7604 38.3237 43.2908 38.6816 42.9446L50.6796 31.3437H5.71875C5.21318 31.3437 4.72832 31.1495 4.37083 30.8037C4.01334 30.458 3.8125 29.989 3.8125 29.5Z"
                    fill="white"
                  />
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
    </AnimatePresence>
  );
}

export default SecondaryPage;
