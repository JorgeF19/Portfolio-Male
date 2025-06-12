import styled from "styled-components";

const Paragraph = styled.p`
  text-align: left;
  font-size: 22px;
  font-family: "JejuMyeongjo";
`;

function ParagraphComponent({ className, children }) {
  return <Paragraph className={className}>{children}</Paragraph>;
}

export default ParagraphComponent;
