import React from "react";
import { MovieInfoColumn, MovieInformationContainer, MovieInformationTextColumn, MovieItem, MovieNameColumn, MovieVoteColumn, MovieYearColumn, MoviesPosterColumn } from "./styled";
import {renderYear} from "../../../utils/utils";
import noImage from "../../../assets/no-image.png";

const MovieCard = (show) => {
    return (
        <MovieItem>
            <MovieInformationContainer to={`/movie/${show.id}`}>
            {show.backdrop_path ? 
            (<MoviesPosterColumn
            src={`https://image.tmdb.org/t/p/w440_and_h660_face${show.poster_path}`}
            alt={show.title}
            effect="blur"
            />) : (
                <MoviesPosterColumn
                src={noImage}
                alt={show.title}
                />)}
            <MovieInformationTextColumn>
                <MovieInfoColumn>
                    <MovieYearColumn>{renderYear(show.release_date)}</MovieYearColumn>
                    <MovieVoteColumn>IMDB: {(show.vote_average).toFixed(1)}</MovieVoteColumn>
                </MovieInfoColumn>
                <MovieNameColumn>{show.title}</MovieNameColumn>
            </MovieInformationTextColumn>
            </MovieInformationContainer>
        </MovieItem>
    );
};

export default MovieCard;