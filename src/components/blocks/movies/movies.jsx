import React from "react";
import { MoviesTitle } from "../trending-movies/styled";
import { TitleSize } from "../../ui/title/title";
import { MoviesContainer } from "./styled";
import ShowsList from "../../ui/shows-list/shows-list";

const Movies = ({title, shows}) => {
    return (
        <MoviesContainer>
            <MoviesTitle as="h3" size={TitleSize.SMALL}>{title}</MoviesTitle>
            <ShowsList shows={shows}/>
        </MoviesContainer>
    );
};

export default Movies;