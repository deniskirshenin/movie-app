import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

export const StyledLogo = styled(NavLink)`
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 10px 10px 10px 0;

    &:hover path{
        fill: green;
    }

    &.active path {
        fill: #FC4747;
    }
`;