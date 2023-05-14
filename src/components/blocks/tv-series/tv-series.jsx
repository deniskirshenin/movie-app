import React from "react";
import { MoviesTitle } from "../trending-movies/styled";
import { TitleSize } from "../../ui/title/title";
import { TvSeriesContainer } from "./styled";
import ShowsList from "../../ui/shows-list/shows-list";

const TvSeries = ({title, shows}) => {
    return (
        <TvSeriesContainer>
            <MoviesTitle as="h3" size={TitleSize.SMALL}>{title}</MoviesTitle>
            <ShowsList shows={shows}/>
        </TvSeriesContainer>
    );
};

export default TvSeries;