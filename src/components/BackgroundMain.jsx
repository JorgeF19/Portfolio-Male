import styled from "styled-components";

const BackgroundMain = styled.img`
  position: absolute;
  height: 100%;
  min-width: 100dvw;
  z-index: -1;
  filter: blur(13px);
`;

function BackgroundMainComponent({ src, alt, id }) {
  return <BackgroundMain id={id} src={src} alt={alt} />;
}

export default BackgroundMainComponent;
