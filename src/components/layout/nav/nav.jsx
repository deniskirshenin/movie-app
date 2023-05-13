import React from "react";

import {ReactComponent as Home} from "/Users/fish/movie-app/src/assets/icon-nav-home.svg";
import {ReactComponent as Movies} from "/Users/fish/movie-app/src/assets/icon-nav-movies.svg";
import {ReactComponent as TvSeries} from "/Users/fish/movie-app/src/assets/icon-nav-tv-series.svg";
import {ReactComponent as Bookmark} from "/Users/fish/movie-app/src/assets/icon-nav-bookmark.svg";
import { StyledLink, StyledNav } from "./styled";
import { AppRoute } from "../../../const";


const Nav = () => {
    return (
        <StyledNav>
            <StyledLink to={AppRoute.HOME}>
                <Home />
            </StyledLink>
            <StyledLink to={AppRoute.MOVIES}>
                <Movies />
            </StyledLink>
            <StyledLink to={AppRoute.TVSERIES}>
                <TvSeries />
            </StyledLink>
            <StyledLink href="/">
                <Bookmark />
            </StyledLink>
        </StyledNav>
    );
};

export default Nav;