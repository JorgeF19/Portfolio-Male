import styled from "styled-components";
import XIconComponent from "./XIcon.jsx";

const GalleryImageWrapper = styled.div`
  position: relative;
  display: inline-block;
  height: fit-content;
`;

const GalleryImage = styled.img`
  width: 35rem;
  height: 20rem;
  border-radius: 30px;
  display: block;
`;

const CornerIcon = styled.div`
  position: absolute;
  ${({ position }) => {
    switch (position) {
      case "top-left":
        return "top: 0; left: 0;";
      case "top-right":
        return "top: 0; right: 0;";
      case "bottom-left":
        return "bottom: 0; left: 0;";
      case "bottom-right":
        return "bottom: 0; right: 0;";
      default:
        return "";
    }
  }}
`;

function GalleryImageComponent({ src, alt }) {
  return (
    <GalleryImageWrapper className="galleryImage">
      <GalleryImage src={src} alt={alt} />
      <CornerIcon position="top-left">
        <XIconComponent />
      </CornerIcon>
      <CornerIcon position="top-right">
        <XIconComponent />
      </CornerIcon>
      <CornerIcon position="bottom-left">
        <XIconComponent />
      </CornerIcon>
      <CornerIcon position="bottom-right">
        <XIconComponent />
      </CornerIcon>
    </GalleryImageWrapper>
  );
}

export default GalleryImageComponent;
//This component is used to create a styled image for the gallery with specific styles.
