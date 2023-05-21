import React from "react";
import { Main, StyledPage } from "./styled";
import { Outlet } from "react-router-dom";
import Header from "../header/header";
import SearchBox from "../../../components/ui/search-box/search-box";

const PageWrapper = () => {
    return (
        <StyledPage>
            <Header />
            <SearchBox />
            <Main>
                <Outlet />
            </Main>
        </StyledPage>
    );
};

export default PageWrapper;