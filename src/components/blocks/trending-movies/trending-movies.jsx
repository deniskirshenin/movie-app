import React from "react";
import { MovieContainer, MoviesTitle } from "./styled";
import { TitleSize } from "../../ui/title/title";
import TrendingMoviesRow from "../../ui/trending-movies-row/trending-movies-row";



const TrendingMovies = ({trendingTitle, movies}) => {
    return (
        <MovieContainer>
            <MoviesTitle as="h3" size={TitleSize.SMALL}>{trendingTitle}</MoviesTitle>
            <TrendingMoviesRow movies={movies} />
        </MovieContainer>
    );
}

export default TrendingMovies;