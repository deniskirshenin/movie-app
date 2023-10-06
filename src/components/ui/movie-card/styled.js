import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const MovieItem = styled.li`
    padding: 0;
    margin: 0;
    list-style-type: none;
`;

export const MoviesPosterColumn = styled.img`
    border-radius: 5px;
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const MovieInformationContainer = styled(Link)`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: fit-content;
    margin: 0 auto;
    color: #fff;
    text-decoration: none;

    &:hover {
        transform: scale(1.1);
        transition: all 0.3s ease-out;
    }
`;

export const MovieInformationTextColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
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
    font-size: 11px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
`;

export const MovieVoteColumn = styled.span`
    display: inline-block;
    opacity: 0.75;
    font-size: 11px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
`;

export const MovieNameColumn = styled.span`
    display: inline-block;
    text-overflow: ellipsis;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`;
