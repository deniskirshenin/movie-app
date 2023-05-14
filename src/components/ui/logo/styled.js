import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

export const StyledLogo = styled(NavLink)`
    display: flex;
    align-items: center;
    text-decoration: none;
    width: 25px;
    height: 20px;

    &:hover path{
        fill: green;
    }

    &.active path {
        fill: #FC4747;
    }
`;