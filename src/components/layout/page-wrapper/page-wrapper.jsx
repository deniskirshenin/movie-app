import React from "react";
import { Main } from "./styled";
import { Outlet } from "react-router-dom";
import Header from "../header/header";

const PageWrapper = () => {
    return (
        <>
            <Header />
            <Main>
                <Outlet />
            </Main>
        </>
    );
};

export default PageWrapper;