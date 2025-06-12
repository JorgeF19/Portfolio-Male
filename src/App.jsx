import { Routes, Route, useLocation, Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import SecondaryPage from "./pages/SecondaryPage.jsx";
import BackgrounMain from "./components/BackgroundMain.jsx";
import Container from "./components/container.jsx";
import ParagraphComponent from "./components/Paragraph.jsx";
import ProfileImageComponent from "./components/ProfileImage.jsx";
import ArrowContainerComponent from "./components/ArrowContainer.jsx";
import "./App.css";

function App() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <main id="mainGrid">
              <Container id="biographyTitleContainer">
                <h1 className="title">Biography</h1>
              </Container>
              <div className="bio">
                <Container id="nameTitleContainer">
                  <h1 className="title">Marialejandra Garcia</h1>
                  <h2 className="title">Actress & Director</h2>
                </Container>
                <Container id="biographyContainer">
                  <ParagraphComponent className="biographyText">
                    Born in 2005 in Barranquilla, Colombia. Marialejandra, also
                    called “Male” by her friends, is a talented audiovisual
                    artist. She had shown her creativity and deep ideas capable
                    to get into anyone's mind . She has created footage with
                    messages that makes you meditate about life, social
                    thoughts, other ones perspective. A person who searches
                    sharing her vision about world with everyone
                  </ParagraphComponent>
                </Container>
              </div>

              <Container id="profileImageContainer">
                <ProfileImageComponent
                  src="src\img\profilePicture.jpg"
                  alt="Profile picture"
                ></ProfileImageComponent>
              </Container>
              <Link id="arrowLink" to="/secondary">
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

              <BackgrounMain
                id="backgroundImage"
                src="src\img\Social.png"
                alt="Biography Background"
              ></BackgrounMain>
            </main>
          }
        />
        <Route path="/secondary" element={<SecondaryPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
