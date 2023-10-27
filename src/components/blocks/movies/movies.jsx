import React from "react";
import Title, { TitleSize } from "../../ui/title/title";
import { MoviesContainer } from "./styled";
import ShowsList from "../../ui/shows-grid/shows-grid";

const Movies = ({title, shows}) => {
    return (
        <MoviesContainer>
            <Title as="h3" size={TitleSize.LARGE}>{title}</Title>
            <ShowsList shows={shows}/>
        </MoviesContainer>
    );
};

export default Movies;