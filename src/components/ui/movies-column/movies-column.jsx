import React from "react";
import {  StyledMoviesColumn } from "./styled";

import MovieCard from "../movie-card/movie-card";



const MoviesColumn = ({shows}) => {
    console.log(shows);

    return (
        <StyledMoviesColumn>
            {shows.map((show) => (
                <MovieCard key={show.id} {...show}/>
            ))}
        </StyledMoviesColumn>
    );
};

export default MoviesColumn;