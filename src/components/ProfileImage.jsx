import styled from "styled-components";

const ProfileImage = styled.img`
  height: 400px;
  border-radius: 35px;
`;

function ProfileImageComponent({ src, alt }) {
  return <ProfileImage src={src} alt={alt} />;
}
export default ProfileImageComponent;
