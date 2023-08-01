import React, { useState } from "react";
import { StyledTvSeriesPage } from "./styled";
import TopRated from "../../blocks/top-rated/top-rated";

import { endpoints } from "../../../api/api";

import { useApiRequest } from "../../../hooks/useApiRequest";
import { PaginationContainer, StyledButton } from "../../ui/pagination-button/styled";

const TvSeriesPage = () => {
    const [pageIndex, setPageIndex] = useState(1);
    const { data: topRated, error } = useApiRequest(endpoints.topRated, `?page=${pageIndex}`);
    console.log(topRated);
    
    if(error) return <h1>Something went wrong</h1>;
    if(!topRated) return <h1>Loading...</h1>;


    return (
        <StyledTvSeriesPage>
            <TopRated shows={topRated.results} title="TV Series" />
            <PaginationContainer>
                <StyledButton onClick={() => setPageIndex(pageIndex - 1)} disabled={pageIndex === 1 ? true : false}>Previous</StyledButton>
                <StyledButton onClick={() => setPageIndex(pageIndex + 1)}>Next</StyledButton>
            </PaginationContainer>
        </StyledTvSeriesPage>
    );
};

export default TvSeriesPage;