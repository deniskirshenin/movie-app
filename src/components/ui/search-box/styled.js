import { styled } from "styled-components";
import iconSearch from "../../../assets/icon-search.svg";
import { Link } from "react-router-dom";

export const SearchContainer = styled.nav`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;
    width: auto;
    padding: 24px 16px;
    background-color: #10141E;
    color: #fff;
    transition: all 0.3s ease-out;

    @media (min-width: 768px) {
        padding: 25px;
    }
`;

export const SearchInput = styled.input`
    background-color: #10141E;
    width: 100%;
    height: 48px;
    color: #fff;
    opacity: 0.5;
    font-weight: 300;
    font-size: 20px;
    line-height: 20px;
    border: none;
    padding: 2px;

    &:hover {
        opacity: 1;
        padding: 2px 2px 1px 2px;
        border-bottom: 1px solid #5A698F;
        caret-color: #fc4747;
    }
    &:focus {
        opacity: 1;
        padding: 2px 2px 1px 2px;
        border-bottom: 1px solid #5A698F;
        outline: 0;
        caret-color: #fc4747;
    }
`;

export const SearchIcon = styled.span`
    display: block;
    min-width: 24px;
    min-height: 24px;
    background-image: url(${iconSearch});
    background-size: contain;
    margin-right: 16px;
`;

export const SearchButton = styled(Link)`
    padding: 14px 20px;
    box-sizing: border-box;
    width: max-content;
    text-align: center;
    color: #FFFFFF;
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 20px;
    background: #FC4747;
    border-radius: 5px;
    border: none;
    text-transform: capitalize;
    text-decoration: none;
    transition: all 0.5s ease-out;

    &:hover {
        background-color: #FFFFFF;
        color: #FC4747;
    }

    &:disabled {
        background-color: #5A698F;
        color: #FFFFFF;
    }
`;