import React from "react";

import {ReactComponent as Home} from "../../../assets/icon-nav-home.svg";
import {ReactComponent as Movies} from "../../../assets/icon-nav-movies.svg";
import {ReactComponent as TvSeries} from "../../../assets/icon-nav-tv-series.svg";
import {ReactComponent as Bookmark} from "../../../assets/icon-nav-bookmark.svg";
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
            <StyledLink to={AppRoute.LUCKY}>
                <Bookmark />
            </StyledLink>
        </StyledNav>
    );
};

export default Nav;