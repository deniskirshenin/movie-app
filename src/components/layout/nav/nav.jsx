// import React, { useEffect, useState } from "react";

import { StyledLink, StyledNav } from "./styled";
import { AppRoute } from "../../../const";
import Logo from "../../ui/logo/logo";
import styled from "styled-components";
import { MdOutlineSearch } from 'react-icons/md';
import { GiClapperboard } from "react-icons/gi";
import { AiOutlineHome } from "react-icons/ai";
import { RxVideo } from "react-icons/rx";

// import SignupModal from "../../blocks/signup-modal/signup-modal";
// import { auth } from "../../../firebase";
// import { useDispatch, useSelector } from "react-redux";
// import { login, logout, selectUser } from "../../../features/userSlice";

export const MenuContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: 10px;
    padding: 20px;
    background-color: #2D2D2D;
    color: #778396;
    position: fixed;
    bottom: 0;
    left: 0;

    @media (min-width: 768px) {
        justify-content: flex-end;
        position: relative;
        gap: 20px;
        margin: 0 0 0 20px;
        padding: 0;
        background-color: transparent;
    }
`;

export const NavIcon = styled.div`
    @media (min-width: 768px) {
        display: none;
    }
`;

const Nav = () => {
    // const [isModalOpen, setIsModalOpen] = useState(false);
    // const user = useSelector(selectUser);
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     const unsubscribe = auth.onAuthStateChanged((userAuth) => {
    //         if(userAuth) {
    //             // Logged in
    //             dispatch(login({
    //                 uid: userAuth.uid,
    //                 email: userAuth.email,
    //             }))
    //         } else {
    //             // Logged out
    //             dispatch(logout);
    //         }
    //     });

    //     return () => { unsubscribe(); };
    // }, [])

    // const openModal = (evt) => {
    //     evt.stopPropagation();
    //     setIsModalOpen(true);
    // };

    // const closeModal = () => {
    //     setIsModalOpen(false);
    // }

    return (
        <StyledNav>
            <StyledLink to={AppRoute.HOME}>
                <Logo />
            </StyledLink>

            <MenuContainer>
                <StyledLink to='/'>
                    <NavIcon><AiOutlineHome /></NavIcon>
                    Home
                </StyledLink>
                <StyledLink to={AppRoute.MOVIES}>
                    <NavIcon><GiClapperboard /></NavIcon>
                    Movies
                </StyledLink>
                <StyledLink to={AppRoute.TVSERIES}>
                    <NavIcon><RxVideo /></NavIcon>
                    TvSeries
                </StyledLink>
                <StyledLink to={AppRoute.SEARCH}>
                    <NavIcon><MdOutlineSearch /></NavIcon>
                    Search
                </StyledLink>
            </MenuContainer>
            {/* <StyledLink onClick={openModal} style={{marginLeft: 'auto'}}>{!user ? 'Sign in' : 'Sign out'}</StyledLink>

            {isModalOpen && <SignupModal onClose={closeModal} />} */}
        </StyledNav>
        
    );
};

export default Nav;