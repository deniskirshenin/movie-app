import React from "react";
import { StyledMoviesPage } from "./styled";
import Movies from "../../blocks/movies/movies";

const MoviesPage = ({shows}) => {
    return (
        <StyledMoviesPage>
            <Movies shows={shows} title="Movies"/>
        </StyledMoviesPage>
    );
};

export default MoviesPage;
