import { styled } from "styled-components";

export const StyledLuckyPage = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: #191b26;
    color: #fff;
`;

export const LuckyButton = styled.button`
    display: inline-flex;
    justify-content: center;
    border: 3px solid #fff;
    border-radius: 8px;
    background-color: transparent;
    color: #fff;
    font-family: inherit;
    font-size: 18px;
    padding: 10px;
    margin: 10px;

    @media (min-width: 768px) {
        margin: 10px 25px;
    }

    @media (min-width: 1200px) {
        margin: 32px;
    }
`;

export const TryAgain = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: #191b26;
    color: #fff;
`;