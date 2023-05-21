import React, { useState } from "react";
import { StyledTvSeriesPage } from "./styled";
import TvSeries from "../../blocks/tv-series/tv-series";

import { endpoints } from "../../../api/api";

import { useApiRequest } from "../../../hooks/useApiRequest";
import { PaginationContainer, StyledButton } from "../../ui/pagination-button/styled";

const TvSeriesPage = () => {
    const [pageIndex, setPageIndex] = useState(1);
    const { data: tvSeries, error } = useApiRequest(endpoints.tvSeries, `?page=${pageIndex}`);
    console.log(tvSeries);
    
    if(error) return <h1>Something went wrong</h1>;
    if(!tvSeries) return <h1>Loading...</h1>;


    return (
        <StyledTvSeriesPage>
            <TvSeries shows={tvSeries.results} title="TV Series" />
            <PaginationContainer>
                <StyledButton onClick={() => setPageIndex(pageIndex - 1)} disabled={pageIndex === 1 ? true : false}>Previous</StyledButton>
                <StyledButton onClick={() => setPageIndex(pageIndex + 1)}>Next</StyledButton>
            </PaginationContainer>
        </StyledTvSeriesPage>
    );
};

export default TvSeriesPage;