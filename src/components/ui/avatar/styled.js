import { styled } from "styled-components";
import imageAvatar from "/Users/fish/movie-app/src/assets/image-avatar.png";

export const AvatarContainer = styled.div`
    box-sizing: border-box;
    width: 24px;
    height: 24px;
    border: 1px solid #fff;
    border-radius: 50%;
    background-image: url(${imageAvatar});
    background-size: cover;
`;