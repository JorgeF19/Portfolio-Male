import VerticalImageComponent from "./galleryImageVertical";
import styled from "styled-components";
import ProjectDescriptionComponent from "./projectDescription";

const ProjectContainerVertical = styled.div`
  margin-top: 5rem;
  margin-bottom: 5rem;
  display: flex;
  justify-content: space-evenly;
`;
function ProjectContainerVerticalComponent({ src, alt, title, description }) {
  return (
    <ProjectContainerVertical className="projectContainer">
      <ProjectDescriptionComponent
        title={title}
        description={description}
      ></ProjectDescriptionComponent>
      <VerticalImageComponent src={src} alt={alt}></VerticalImageComponent>
    </ProjectContainerVertical>
  );
}

export default ProjectContainerVerticalComponent;
