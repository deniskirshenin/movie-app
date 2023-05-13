import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const StyledLogo = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    width: 25px;
    height: 20px;

    &:hover path{
        fill: green;
    }
`;