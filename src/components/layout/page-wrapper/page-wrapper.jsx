import React from "react";
import { Main } from "./styled";
import { Outlet } from "react-router-dom";
import Header from "../header/header";
import SearchBox from "../../../components/ui/search-box/search-box";

const PageWrapper = () => {
    return (
        <>
            <Header />
            <SearchBox />
            <Main>
                <Outlet />
            </Main>
        </>
    );
};

export default PageWrapper;