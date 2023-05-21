import React from "react";
import { StyledButton } from "./styled";

const PaginationButton = ({children}) => {
    return (
        <StyledButton>{children}</StyledButton>
    );
}

export default PaginationButton;