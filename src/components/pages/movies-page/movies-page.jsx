import React from "react";
import { StyledMoviesPage } from "./styled";
import Movies from "../../blocks/movies/movies";
import { URL, endpoints } from "../../../api/api";
import { API_KEY } from "../../../api/api_key";
import { PaginationContainer, StyledButton } from "../../ui/pagination-button/styled";
import useSWRInfinite from "swr/infinite";
import { fetcher } from "../../..";


const MoviesPage = () => {
    const getKey = (pageIndex, previousPageData) => {
        if (previousPageData && !previousPageData.results.length) return null; // No more data
        return URL + endpoints.movies + `?page=${pageIndex + 1}&` + API_KEY; // Adjust the page index
      };
      const { data, error, size, setSize } = useSWRInfinite(getKey, fetcher);
    
      const isLoading = !data && !error;
    
      const handleLoadMore = () => {
        setSize(size + 1);
      };
    
      if (error) return <h1>Something went wrong</h1>;
      if (isLoading) return <h1>Loading...</h1>;
    
      const movies = data ? data.flatMap((page) => page.results) : [];

    
    return (
        <StyledMoviesPage>
            <Movies shows={movies} title="Movies" />
            <PaginationContainer>
                <StyledButton onClick={handleLoadMore}>Load More</StyledButton>
            </PaginationContainer>
        </StyledMoviesPage>
    );
};

export default MoviesPage;
