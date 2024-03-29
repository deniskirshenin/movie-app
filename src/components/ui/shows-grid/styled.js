import { styled } from "styled-components";

export const StyledShowsList = styled.ul`
    margin: 0;
    list-style-type: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(164px, 1fr));
    column-gap: 15px;
    padding: 100px 16px 16px 16px;

    @media (min-width: 768px) {
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        column-gap: 30px;
        padding: 100px 25px 25px 25px;
    }

    @media (min-width: 1200px) {
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        grid-auto-flow: dense row;
        column-gap: 40px;
        row-gap: 32px;
        padding: 100px 36px 36px 36px;
        box-sizing: border-box;
    }
`;
