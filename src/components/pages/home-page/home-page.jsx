import React from "react";
import { StyledHomePage } from "./styled";
import Movies from "../../blocks/movies/movies";
import { PaginationContainer, StyledButton } from "../../ui/pagination-button/styled";
import { URL, endpoints } from "../../../api/api";
import useSWRInfinite from "swr/infinite"; // Import useSWRInfinite
import { API_KEY } from "../../../api/api_key";
import { fetcher } from "../../../index"; // Import the fetcher from index.js

const HomePage = () => {
  const getKey = (pageIndex, previousPageData) => {
    if (previousPageData && !previousPageData.results.length) return null; // No more data
    return URL + endpoints.popular + `?page=${pageIndex + 1}&` + API_KEY; // Adjust the page index
  };
  const { data, error, size, setSize } = useSWRInfinite(getKey, fetcher);

  const isLoading = !data && !error;

  const handleLoadMore = () => {
    setSize(size + 1);
  };

  if (error) return <h1>Something went wrong</h1>;
  if (isLoading) return <h1>Loading...</h1>;

  const shows = data ? data.flatMap((page) => page.results) : [];

  return (
    <StyledHomePage>
      <Movies shows={shows} title="Recommended for you" />
      <PaginationContainer>
        {/* Implement the "Load More" button to trigger loading more data */}
        <StyledButton onClick={handleLoadMore}>Load More</StyledButton>
      </PaginationContainer>
    </StyledHomePage>
  );
};

export default HomePage;
