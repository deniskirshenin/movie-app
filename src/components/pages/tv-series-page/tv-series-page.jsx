import React from "react";
import { StyledTvSeriesPage } from "./styled";
import TvSeries from "../../blocks/tv-series/tv-series";

const TvSeriesPage = ({shows}) => {
    return (
        <StyledTvSeriesPage>
            <TvSeries shows={shows} title="TV Series" />
        </StyledTvSeriesPage>
    );
};

export default TvSeriesPage;