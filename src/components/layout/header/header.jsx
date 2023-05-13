import React from "react";
import { HeaderContainer, StyledHeader } from "./styled";
import Logo from "../../ui/logo/logo";
import Nav from "../nav/nav";
import { AvatarContainer } from "../../ui/avatar/styled";


const Header = () => {
    return (
        <HeaderContainer>
            <StyledHeader>
            <Logo />
            <Nav />
            <AvatarContainer />
            </StyledHeader>
        </HeaderContainer>
        
    );
};

export default Header;