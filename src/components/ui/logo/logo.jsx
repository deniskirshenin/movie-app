import React from "react";
import {ReactComponent as LogoImage} from "../../../assets/logo.svg";
import { StyledLogo } from "./styled";

const Logo = () => {
    return (
        <StyledLogo>
            <LogoImage />
        </StyledLogo>
    );
};

export default Logo;