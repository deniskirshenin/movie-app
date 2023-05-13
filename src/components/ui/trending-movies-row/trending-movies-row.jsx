import React from "react";
import {  MoviesRow } from "./styled";

import FilmCardMain from "../movie-card-main/movie-card-main";

const TrendingMoviesRow = ({movies}) => {
    console.log(movies);
    
    return (
            <MoviesRow>
                {movies.map((movie) => (
                    <FilmCardMain key={movie.id} {...movie}/>
                ))}
            </MoviesRow>
    );
};

export default TrendingMoviesRow;