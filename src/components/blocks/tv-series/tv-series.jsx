import React from "react";
import { MoviesTitle } from "../trending-movies/styled";
import { TitleSize } from "../../ui/title/title";
import { TvSeriesContainer } from "./styled";
import TvSeriesColumn from "../../ui/tv-series-column/tv-series-column";

const TvSeries = ({title, shows}) => {
    return (
        <TvSeriesContainer>
            <MoviesTitle as="h3" size={TitleSize.SMALL}>{title}</MoviesTitle>
            <TvSeriesColumn shows={shows}/>
        </TvSeriesContainer>
    );
};

export default TvSeries;