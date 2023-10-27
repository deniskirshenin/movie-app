import { styled } from "styled-components";

export const StyledHeader = styled.header`
    height: 90px;
    background-color: ${(props) => props.show ? '#000' : 'transparent'};
    position: fixed;
    top: 0;
    z-index: 2;
    width: 100%;
    box-sizing: border-box;

    transition-timing-function: ease-in;
    transition: all 0.5s;
`;
