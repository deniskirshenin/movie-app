import React, { useState } from "react";
import { StyledMoviesPage } from "./styled";
import Movies from "../../blocks/movies/movies";
import { URL, endpoints } from "../../../api/api";
import { API_KEY } from "../../../api/api_key";
import useSWR from "swr";
import { PaginationContainer, StyledButton } from "../../ui/pagination-button/styled";


const MoviesPage = () => {
    const [pageIndex, setPageIndex] = useState(1);
    const page = `?page=${pageIndex}&`;
    const url = URL + endpoints.movies + page + API_KEY;
    const { data: movies, error } = useSWR(url);
    console.log(movies);
    
    if(error) return <h1>Something went wrong</h1>;
    if(!movies) return <h1>Loading...</h1>;

    
    return (
        <StyledMoviesPage>
            <Movies shows={movies.results} title="Movies" />
            <PaginationContainer>
                <StyledButton onClick={() => setPageIndex(pageIndex - 1)} disabled={pageIndex === 1 ? true : false}>Previous</StyledButton>
                <StyledButton onClick={() => setPageIndex(pageIndex + 1)}>Next</StyledButton>
            </PaginationContainer>
        </StyledMoviesPage>
    );
};

export default MoviesPage;
