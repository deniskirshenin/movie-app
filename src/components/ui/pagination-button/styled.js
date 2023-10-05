import { styled } from "styled-components";

export const StyledButton = styled.button`
    padding: 14px 96px;
    box-sizing: border-box;
    width: 45%;
    text-align: center;
    color: #FFFFFF;
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 19px;
    background: #FC4747;
    border-radius: 5px;
    border: none;

    &:hover {
        background-color: #FFFFFF;
        color: #FC4747;
    }

    &:disabled {
        background-color: #5A698F;
        color: #FFFFFF;
    }
`;

export const PaginationContainer = styled.div`
    padding: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #191b26;
`;