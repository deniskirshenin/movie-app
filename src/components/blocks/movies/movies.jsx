import React from "react";
import Title, { TitleSize } from "../../ui/title/title";
import { MoviesContainer } from "./styled";
import ShowsList from "../../ui/shows-list/shows-list";

const Movies = ({title, shows}) => {
    return (
        <MoviesContainer>
            <Title as="h3" size={TitleSize.SMALL}>{title}</Title>
            <ShowsList shows={shows}/>
        </MoviesContainer>
    );
};

export default Movies;