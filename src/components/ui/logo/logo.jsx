import React from "react";
import { StyledLogo } from "./styled";
import logo from '../../../assets/logo-no-background.png';

const Logo = () => {
    return (
        <StyledLogo>
            <img src={logo} alt="" width={150} height={50}/>
        </StyledLogo>
    );
};

export default Logo;