import { styled } from "styled-components";

export const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    width: auto;
    height: 56px;
    background-color: #161D2F;
    position: sticky;
    top: 0;
    z-index: 2;
    width: 100%;
    box-sizing: border-box;

    @media (min-width: 768px) {
        padding: 25px;
    }

    @media (min-width: 1200px) {
        padding: 32px;
        height: 96px;
    }
`;

export const SearchWrapper = styled.div`
    width: 100%;
`;
