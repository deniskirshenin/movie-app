import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

export const StyledLogo = styled(NavLink)`
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 0 0 40px;

    &:hover path{
        fill: green;
    }

    &.active path {
        fill: #FC4747;
    }
`;