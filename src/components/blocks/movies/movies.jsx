import React from "react";
import { MoviesTitle } from "../trending-movies/styled";
import { TitleSize } from "../../ui/title/title";
import MoviesColumn from "../../ui/movies-column/movies-column";
import { MoviesContainer } from "./styled";

const Movies = ({title, shows}) => {
    return (
        <MoviesContainer>
            <MoviesTitle as="h3" size={TitleSize.SMALL}>{title}</MoviesTitle>
            <MoviesColumn shows={shows}/>
        </MoviesContainer>
    );
};

export default Movies;