import styled from "styled-components";
import DescriptionProjectComponent from "./DescriptionProject.jsx";
import GalleryProjectTitle from "./GalleryProjectTitle.jsx";

const ProjectDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 1rem;
  color: #fff;
`;

function ProjectDescriptionComponent({ title, description }) {
  return (
    <ProjectDescription>
      <GalleryProjectTitle>{title}</GalleryProjectTitle>
      <DescriptionProjectComponent>{description}</DescriptionProjectComponent>
    </ProjectDescription>
  );
}
export default ProjectDescriptionComponent;
