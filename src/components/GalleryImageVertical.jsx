import styled from "styled-components";
import XIconComponent from "./XIcon.jsx";

const VerticalImage = styled.img`
  width: 320px;
  height: 530px;
  border-radius: 19px;
  transition: all 0.3s ease-in-out;
`;
const LinkImage = styled.a`
  color: inherit;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
    cursor: pointer;

    &:hover img {
      filter: brightness: (0.8);
      box-shadow: -8px -8px 30px 1px #d11149, 8px 8px 30px 1px #3a015c;
    }
  }
`;
const GalleryImageWrapper = styled.div`
  position: relative;
  display: inline-block;
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

function VerticalImageComponent({ src, alt, projectLink }) {
  return (
    <LinkImage href={projectLink} target="_blank" rel="noopener noreferrer">
      <GalleryImageWrapper className="galleryImage">
        <VerticalImage src={src} alt={alt} />
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
    </LinkImage>
  );
}
export default VerticalImageComponent;
// This component is used to create a styled vertical image for the gallery with specific styles.
