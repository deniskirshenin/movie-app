import { styled } from "styled-components";
import Title from "../../ui/title/title";

export const HeroContainer = styled.div`
    font-family: 'Work Sans', sans-serif;
    display: flex;
    flex-direction: column;
    background-color: #080808;
    width: 100%;
    margin: 0 auto;
    height: auto;
`;

export const HeroImageContainer = styled.img`
    width: 100%;
    object-fit: contain;
    height: auto;
`;

export const HeroTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 16px 26px 34px 26px;
`;

export const HeroTitle = styled(Title)`
    font-family: 'Anton', sans-serif;
    text-transform: uppercase;
`;

export const HeroText = styled.p`
    padding: 0;
    margin: 0;
    color: #fff;
    font-size: 10px;
    line-height: 18px;
`;

export const MovieInfo = styled.div`
    display: flex;
`;

export const MovieInfoText = styled.p`
    padding: 0;
    margin: 0;
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 8px;
    line-height: 15px;
    color: #fff;
`;