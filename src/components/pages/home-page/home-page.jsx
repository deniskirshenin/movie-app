import React from "react";
import { StyledHomePage } from "./styled";
import Hero from "../../blocks/hero/hero";
import TrendingMovies from "../../blocks/trending-movies/trending-movies";
import Movies from "../../blocks/movies/movies";

const HomePage = ({movies}) => {
    return (
        <StyledHomePage>
            <Hero movie={movies[Math.floor(Math.random() * movies.length)]}/>
            <TrendingMovies movies={movies} trendingTitle="Trending"/>
            <Movies shows={movies} title="Recommended for you"/>
        </StyledHomePage>
    );
};

export default HomePage;