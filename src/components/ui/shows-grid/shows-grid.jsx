import React from "react";
import { StyledShowsList } from "./styled";

import MovieCard from "../movie-card/movie-card";



const ShowsGrid = ({shows}) => {
    return (
        <StyledShowsList>
            {shows.map((show,index) => (
                <MovieCard key={`${show.id}${index}`} {...show} />
            ))}
        </StyledShowsList>
    );
};

export default ShowsGrid;