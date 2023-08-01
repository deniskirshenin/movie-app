import React from "react";
import Title, { TitleSize } from "../../ui/title/title";
import { TvSeriesContainer } from "./styled";
import ShowsList from "../../ui/shows-list/shows-list";

const TopRated = ({title, shows}) => {
    return (
        <TvSeriesContainer>
            <Title as="h3" size={TitleSize.SMALL}>{title}</Title>
            <ShowsList shows={shows}/>
        </TvSeriesContainer>
    );
};

export default TopRated;