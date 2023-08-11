import React from "react";
import { StyledHeader } from "./styled";
import Logo from "../../ui/logo/logo";
import Nav from "../nav/nav";
import { AvatarContainer } from "../../ui/avatar/styled";


const Header = () => {
    return (
        <StyledHeader>
            <Logo />
            <Nav />
            <AvatarContainer />
        </StyledHeader>
    );
};

export default Header;