import styled from "styled-components";

const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  flex-shrink: 0;
  backdrop-filter: blur(6px);
  text-orientation: mixed;
  padding: 1rem;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

function ContainerComponent({ id, children }) {
  return <Container id={id}>{children}</Container>;
}

export default ContainerComponent;
