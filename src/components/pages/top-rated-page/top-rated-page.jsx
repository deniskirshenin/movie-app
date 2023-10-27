// import React from "react";
// import { StyledTvSeriesPage } from "./styled";
// import TopRated from "../../blocks/top-rated/top-rated";

// import { URL, endpoints } from "../../../api/api";
// import { PaginationContainer, StyledButton } from "../../ui/pagination-button/styled";
// import useSWRInfinite from "swr/infinite";
// import { fetcher } from "../../..";
// import { API_KEY } from "../../../const";

// const TvSeriesPage = () => {
//   const getKey = (pageIndex, previousPageData) => {
//     // Adjust the page index and construct the URL
//     if (previousPageData && !previousPageData.results.length) return null; // No more data
//     return URL + endpoints.topRated + `?page=${pageIndex + 1}&` + API_KEY;
//   };

//   const { data, error, size, setSize } = useSWRInfinite(getKey, fetcher);


//   const handleLoadMore = () => {
//     setSize(size + 1);
//   };

//   if (error) {
//     console.error("Error fetching data:", error);
//     console.error("Response content:", error.response?.data); // Log the response content
//     return <h1>Something went wrong</h1>;
//   }

//   const topRated = data ? data.flatMap((page) => page.results) : [];

//   return (
//     <StyledTvSeriesPage>
//       <TopRated shows={topRated} title="Classics All-time" />
//       <PaginationContainer>
//         <StyledButton onClick={handleLoadMore}>Load More</StyledButton>
//       </PaginationContainer>
//     </StyledTvSeriesPage>
//   );
// };

// export default TvSeriesPage;
