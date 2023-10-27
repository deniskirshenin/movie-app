// import React, { useEffect, useState } from "react";

import { StyledLink, StyledNav } from "./styled";
import { AppRoute } from "../../../const";
import Logo from "../../ui/logo/logo";
import styled from "styled-components";
// import SignupModal from "../../blocks/signup-modal/signup-modal";
// import { auth } from "../../../firebase";
// import { useDispatch, useSelector } from "react-redux";
// import { login, logout, selectUser } from "../../../features/userSlice";

export const MenuContainer = styled.div`
    display: flex;
    margin: 0 0 0 20px;
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
                <StyledLink to={AppRoute.MOVIES}>
                    Movies
                </StyledLink>
                <StyledLink to={AppRoute.TVSERIES}>
                    TvSeries
                </StyledLink>
                <StyledLink to={AppRoute.LUCKY}>
                    Bookmark
                </StyledLink>
            </MenuContainer>
            {/* <StyledLink onClick={openModal} style={{marginLeft: 'auto'}}>{!user ? 'Sign in' : 'Sign out'}</StyledLink>

            {isModalOpen && <SignupModal onClose={closeModal} />} */}
        </StyledNav>
        
    );
};

export default Nav;