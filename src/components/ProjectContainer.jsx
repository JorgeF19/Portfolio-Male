import GalleryImageComponent from "./GalleryImage.jsx";
import styled from "styled-components";
import ProjectDescriptionComponent from "./ProjectDescription.jsx";

const ProjectContainer = styled.div`
  margin-top: 5rem;
  margin-bottom: 5rem;
  display: flex;
  justify-content: center;
`;

function ProjectContainerComponent({
  src,
  alt,
  title,
  description,
  projectLink,
}) {
  return (
    <ProjectContainer className="projectContainer">
      <GalleryImageComponent
        src={src}
        alt={alt}
        projectLink={projectLink}
      ></GalleryImageComponent>
      <ProjectDescriptionComponent
        title={title}
        description={description}
      ></ProjectDescriptionComponent>
    </ProjectContainer>
  );
}

export default ProjectContainerComponent;
// This component is used to create a styled project container with an image, title, and description
