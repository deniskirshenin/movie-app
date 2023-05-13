import { styled } from "styled-components";
import { StyledBookmarkButton } from "../bookmark-button/styled";

export const TvSeriesPoster = styled.img`
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

export const TvSeriesInformationContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 164px;
`;

export const TvSeriesInformationText = styled.div`
    display: flex;
    flex-direction: column;
    color: #FFFFFF;
    padding: 10px;
`;

export const TvSeriesInfo = styled.div`
    display: flex;
    flex-direction: row;
    width: max-content;
`;

export const TvSeriesYear = styled.span`
    display: inline-block;
    width: max-content;
    margin-right: 10px;
    opacity: 0.75;
`;

export const TvSeriesVote = styled.span`
    display: inline-block;
    opacity: 0.75;
`;

export const TvSeriesName = styled.span`
    display: inline-block;
    font-weight: 500;
    font-size: 15px;
    line-height: 19px;
`;

export const TvSeriesBookmarkButton = styled(StyledBookmarkButton)`
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