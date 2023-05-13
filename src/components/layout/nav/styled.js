import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const StyledNav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const StyledLink = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    min-width: 16px;
    min-height: 16px;
    margin-right: 24px;

    &:hover path{
        fill: #fff;
    }
`;