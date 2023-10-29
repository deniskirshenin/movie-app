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
    flex-direction: column;
    color: #fff;
    font-size: 0.8rem;
    line-height: 1rem;
    align-items: center;
    text-decoration: none;
    color: #fff;

    transition: all 0.5s ease-in-out;

    @media (min-width: 768px) {
        flex-direction: row;
        font-size: 1.3rem;
        line-height: 2rem;
    }

    &:hover {
        color: #bebebe;
    }
`;
