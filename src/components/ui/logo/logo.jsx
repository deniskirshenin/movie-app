import React from "react";
import {ReactComponent as LogoImage} from "/Users/fish/movie-app/src/assets/logo.svg";
import { StyledLogo } from "./styled";
import { AppRoute } from "../../../const";

const Logo = () => {
    return (
        <StyledLogo to={AppRoute.MAIN}>
            <LogoImage />
        </StyledLogo>
    );
};

export default Logo;