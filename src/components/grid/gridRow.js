import styled from "styled-components";

export const GridRow = styled.div`
    margin: 15px;
    overflow-x: scroll;
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 50%;
    scroll-snap-type: x mandatory;
    scroll-snap-stop: always;
    
    column-gap: 15px;

    @media (min-width: 768px) {
        grid-auto-columns: 25%;
        column-gap: 30px;
    }

    @media (min-width: 1200px) {
        grid-auto-columns: 20%;
        column-gap: 40px;
        row-gap: 32px;
        box-sizing: border-box;
    }

    &::-webkit-scrollbar {
        display: none;
    }
`;
