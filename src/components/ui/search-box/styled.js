import { styled } from "styled-components";
import iconSearch from "/Users/fish/movie-app/src/assets/icon-search.svg";

export const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: auto;
    padding: 24px 16px;
    background-color: #10141E;
    color: #fff;
`;

export const SearchInput = styled.input`
    background-color: #10141E;
    width: 100%;
    color: #fff;
    opacity: 0.5;
    font-weight: 300;
    font-size: 16px;
    line-height: 20px;
    border: none;
    padding: 2px;

    &:hover {
        opacity: 1;
        border-bottom: 1px solid #5A698F;
        caret-color: #fc4747;
    }
    &:focus {
        opacity: 1;
        border-bottom: 1px solid #5A698F;
        outline: 0;
        caret-color: #fc4747;
    }
`;

export const SearchIcon = styled.div`
    min-width: 24px;
    min-height: 24px;
    background-image: url(${iconSearch});
    background-size: contain;
    margin-right: 16px;
`;
