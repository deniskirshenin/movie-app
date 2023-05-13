import { styled } from "styled-components";
import { StyledBookmarkButton } from "../bookmark-button/styled";

export const MoviesPosterColumn = styled.img`
    border-radius: 5px;
    margin: 0.5rem;
    width: 164px;
    height: 154px;
    transition: all ease-out 0.2s;
    object-fit: fill;
    filter: brightness(0.6);

    &:hover {
        transform: scale(1.1);
        filter: brightness(1);
        transition: all ease-out 0.2s;
    }
`;

export const MovieInformationContainerColumn = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 164px;
`;

export const MovieInformationTextColumn = styled.div`
    display: flex;
    flex-direction: column;
    color: #FFFFFF;
    padding: 10px;
`;

export const MovieInfoColumn = styled.div`
    display: flex;
    flex-direction: row;
    width: max-content;
`;

export const MovieYearColumn = styled.span`
    display: inline-block;
    width: max-content;
    margin-right: 10px;
    opacity: 0.75;
`;

export const MovieVoteColumn = styled.span`
    display: inline-block;
    opacity: 0.75;
`;

export const MovieNameColumn = styled.span`
    display: inline-block;
    font-weight: 500;
    font-size: 15px;
    line-height: 19px;
`;

export const MovieBookmarkButtonColumn = styled(StyledBookmarkButton)`
    position: absolute;
    left: 130px;
    top: 16px;

    &:hover {
        background-color: #fff;
        path {
            stroke: #10141E;
            fill: #10141E;
        }
    }
`;