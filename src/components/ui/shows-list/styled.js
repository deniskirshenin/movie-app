import { styled } from "styled-components";

export const StyledShowsList = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 15px;
    padding: 16px;

    @media (min-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
        column-gap: 30px;
        padding: 25px;
    }

    @media (min-width: 1200px) {
        grid-template-columns: repeat(4, 1fr);
        column-gap: 40px;
        padding: 36px;
    }
`;
