import { styled } from "styled-components";
import { StyledBookmarkButton } from "../bookmark-button/styled";

export const ImageContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

export const MoviesPoster = styled.img`
    border-radius: 5px;
    margin: 0.5rem;
    min-width: 240px;
    height: 140px;
    transition: all ease-out 0.2s;
    object-fit: fill;
    filter: brightness(0.6);

    @media (min-width: 768px) {
        min-width: 470px;
        height: 230px;
    }    

    &:hover {
        transform: scale(1.07);
        filter: brightness(1);
        transition: all ease-out 0.2s;
    }
`;

export const MovieInformationContainer = styled.div`
    position: relative;
    display: flex;
`;

export const MovieInformationText = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    left: 20px;
    bottom: 20px;
    color: #FFFFFF;
`;

export const MovieInfo = styled.div`
    display: flex;
    width: max-content;
`;

export const MovieYear = styled.span`
    display: inline-block;
    width: max-content;
    margin-right: 10px;
    opacity: 0.75;
`;

export const MovieVote = styled.span`
    display: inline-block;
    opacity: 0.75;
`;

export const MovieName = styled.span`
    position: relative;
    display: inline-block;
    font-weight: 500;
    font-size: 15px;
    line-height: 19px;
`;

export const MovieBookmarkButton = styled(StyledBookmarkButton)`
    position: absolute;
    left: 207px;
    top: 16px;

    &:hover {
        background-color: #fff;
        path {
            stroke: #10141E;
            fill: #10141E;
        }
    }

    @media (min-width: 768px) {
        left: 430px;
        top: 20px;
    }
`;