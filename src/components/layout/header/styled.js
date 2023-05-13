import { styled } from "styled-components";

export const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    width: auto;
    height: 56px;
    background-color: #161D2F;
`;

export const SearchWrapper = styled.div`
    width: 100%;
`;

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: sticky;
    top: 0;
    z-index: 2;
    width: 100%;
`;