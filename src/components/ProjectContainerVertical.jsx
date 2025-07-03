import VerticalImageComponent from "./GalleryImageVertical.jsx";
import styled from "styled-components";
import ProjectDescriptionComponent from "./ProjectDescription.jsx";

const ProjectContainerVertical = styled.div`
  margin-top: 5rem;
  margin-bottom: 5rem;
  display: flex;
  justify-content: space-evenly;
`;
function ProjectContainerVerticalComponent({
  src,
  alt,
  title,
  description,
  projectLink,
}) {
  return (
    <ProjectContainerVertical className="projectContainerV">
      <ProjectDescriptionComponent
        title={title}
        description={description}
      ></ProjectDescriptionComponent>
      <VerticalImageComponent
        src={src}
        alt={alt}
        projectLink={projectLink}
      ></VerticalImageComponent>
    </ProjectContainerVertical>
  );
}

export default ProjectContainerVerticalComponent;
