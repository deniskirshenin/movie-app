import React from "react";
import { StyledTvSeriesPage } from "./styled";
import TopRated from "../../blocks/top-rated/top-rated";

import { URL, endpoints } from "../../../api/api";
import { PaginationContainer, StyledButton } from "../../ui/pagination-button/styled";
import useSWRInfinite from "swr/infinite";
import { API_KEY } from "../../../api/api_key";
import { fetcher } from "../../..";

const PAGE_SIZE = 20; // Number of items per page

const TvSeriesPage = () => {
  const getKey = (pageIndex, previousPageData) => {
    // Adjust the page index and construct the URL
    if (previousPageData && !previousPageData.results.length) return null; // No more data
    return URL + endpoints.topRated + `?page=${pageIndex + 1}&` + API_KEY;
  };

  const { data, error, size, setSize } = useSWRInfinite(getKey, fetcher);

  // Check if data is loading
  const isLoading = !data && !error;

  const handleLoadMore = () => {
    // Trigger loading of more data by incrementing the size
    setSize(size + 1);
  };

  // Error handling
  if (error) {
    console.error("Error fetching data:", error);
    console.error("Response content:", error.response?.data); // Log the response content
    return <h1>Something went wrong</h1>;
  }

  // Check if data is missing or invalid
  if (!data || data.some((page) => !page.results)) {
    console.error("Invalid data received:", data);
    return <h1>Invalid data received</h1>;
  }

  // Flatten the data from all pages into a single array
  const topRated = data ? data.flatMap((page) => page.results) : [];

  return (
    <StyledTvSeriesPage>
      <TopRated shows={topRated} title="Classics All-time" />
      <PaginationContainer>
        <StyledButton onClick={handleLoadMore}>Load More</StyledButton>
      </PaginationContainer>
    </StyledTvSeriesPage>
  );
};

export default TvSeriesPage;
