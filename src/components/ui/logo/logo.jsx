import React from "react";
import { StyledLogo } from "./styled";
import logo from '../../../assets/logo-no-background.png';

const Logo = () => {
    return (
        <StyledLogo>
            <img src={logo} alt="" width={250} height={20}/>
        </StyledLogo>
    );
};

export default Logo;