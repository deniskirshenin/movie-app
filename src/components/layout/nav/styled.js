import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

export const StyledNav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;

export const StyledLink = styled(NavLink)`
    display: flex;
    color: #fff;
    font-size: 16px;
    line-height: 32px;
    align-items: center;
    text-decoration: none;
    margin-right: 24px;

    &:hover path{
        fill: #fff;
    }

    &.active path {
        fill: crimson;
    }
`;
