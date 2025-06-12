import styled from "styled-components";

const ArrowContainer = styled.div`
  background-color: rgba(41, 41, 41, 0.27);
  backdrop-filter: blur(6px);
  border-radius: 50%;
  width: 61px;
  height: 59px;
  flex-shrink: 0;
  padding: 10px;
  cursor: pointer;
`;

function ArrowContainerComponent({ children }) {
  return <ArrowContainer className="slideButton">{children}</ArrowContainer>;
}
export default ArrowContainerComponent;
// This component is used to create a container for the arrow icon with specific styles.
