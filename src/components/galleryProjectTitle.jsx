import styled from "styled-components";

const ProjectTitle = styled.h1`
  font-family: "Jaini Purva";
  color: #b7b22f;
  font.size: 8rem;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
  text-align: center;
`;

function GalleryProjectTitle({ children }) {
  return <ProjectTitle>{children}</ProjectTitle>;
}
export default GalleryProjectTitle;
//asd
