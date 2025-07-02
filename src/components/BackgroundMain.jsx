import styled from "styled-components";

const Background = styled.img`
  position: absolute;
  height: 100%;
  min-width: 100dvw;
  z-index: -1;
  filter: blur(13px);
`;

function BackgroundMainComponent({ src, alt, id }) {
  return <Background id={id} src={src} alt={alt} />;
}

export default BackgroundMainComponent;
