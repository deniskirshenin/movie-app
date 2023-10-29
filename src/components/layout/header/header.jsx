import React, { useEffect, useState } from "react";
import { StyledHeader } from "./styled";
import Nav from "../nav/nav";


const Header = () => {
    const [show, handleShow] = useState(false);
    const transitionNavBar = () => {
        if(window.scrollY > 30) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', transitionNavBar);
        return () => window.removeEventListener('scroll', transitionNavBar);
    }, []);

    return (
        <StyledHeader show={show}>
            <Nav />
        </StyledHeader>
    );
};

export default Header;