import { styled } from "styled-components";

export const MoviesRow = styled.div`
    display: flex;
    justify-content: space-between;
    overflow-x: auto;
    padding: 1rem;

    &::-webkit-scrollbar {
        display: none;
    }
`;
