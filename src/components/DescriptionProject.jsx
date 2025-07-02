import styled from "styled-components";

const DescriptionProject = styled.p`
  font-family: "jejuMyeongjo";
  color: #fff;
  text-align: center;
  text-shadow: 5px 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  max-width: 800px;
`;

function DescriptionProjectComponent({ children }) {
  return <DescriptionProject>{children}</DescriptionProject>;
}

export default DescriptionProjectComponent;
// This component is used to create a styled paragraph for the project description with specific styles.
