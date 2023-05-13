import React from "react";
import { StyledTvSeriesColumn } from "./styled";

import TvSeriesCard from "../tv-series-card/tv-series-card";

const TvSeriesColumn = ({shows}) => {
    console.log(shows);

    return (
        <StyledTvSeriesColumn>
            {shows.map((show) => (
                <TvSeriesCard key={show.id} {...show}/>
            ))}
        </StyledTvSeriesColumn>
    );
};

export default TvSeriesColumn;