import React from "react";
import {ReactComponent as LogoImage} from "/Users/fish/movie-app/src/assets/logo.svg";
import { StyledLogo } from "./styled";

const Logo = () => {
    return (
        <StyledLogo>
            <LogoImage />
        </StyledLogo>
    );
};

export default Logo;