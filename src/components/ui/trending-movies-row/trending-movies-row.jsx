import React from "react";
import {  MoviesRow } from "./styled";

import MovieCardMain from "../movie-card-main/movie-card-main";

const TrendingMoviesRow = ({movies}) => { 
    return (
            <MoviesRow>
                {movies.map((movie) => (
                    <MovieCardMain key={movie.id} {...movie}/>
                ))}
            </MoviesRow>
    );
};

export default TrendingMoviesRow;