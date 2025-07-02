import GalleryImageComponent from "./GalleryImage";
import styled from "styled-components";
import ProjectDescriptionComponent from "./ProjectDescription";

const ProjectContainer = styled.div`
  margin-top: 5rem;
  margin-bottom: 5rem;
  display: flex;
  justify-content: center;
`;

function ProjectContainerComponent({ src, alt, title, description }) {
  return (
    <ProjectContainer className="projectContainer">
      <GalleryImageComponent src={src} alt={alt}></GalleryImageComponent>
      <ProjectDescriptionComponent
        title={title}
        description={description}
      ></ProjectDescriptionComponent>
    </ProjectContainer>
  );
}

export default ProjectContainerComponent;
// This component is used to create a styled project container with an image, title, and description
