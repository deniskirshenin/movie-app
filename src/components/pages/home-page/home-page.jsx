import React, { useState } from "react";
import { StyledHomePage } from "./styled";
import Movies from "../../blocks/movies/movies";
import { PaginationContainer, StyledButton } from "../../ui/pagination-button/styled";
import { URL, endpoints } from "../../../api/api";

import useSWR from "swr";
import { API_KEY } from "../../../api/api_key";

const HomePage = () => {
    const [pageIndex, setPageIndex] = useState(1);
    const page = `?page=${pageIndex}`;
    const url = URL + endpoints.popular + page + API_KEY;
    const { data: movies, error } = useSWR(url);
    console.log(movies);

    if(error) return <h1>Something went wrong</h1>;
    if(!movies) return <h1>Loading...</h1>;

    return (
        <StyledHomePage>
            <Movies shows={movies.results} title="Recommended for you"/>
            <PaginationContainer>
                <StyledButton onClick={() => setPageIndex(pageIndex - 1)} disabled={pageIndex === 1 ? true : false}>Previous</StyledButton>
                <StyledButton onClick={() => setPageIndex(pageIndex + 1)}>Next</StyledButton>
            </PaginationContainer>
        </StyledHomePage>
    );
};

export default HomePage;