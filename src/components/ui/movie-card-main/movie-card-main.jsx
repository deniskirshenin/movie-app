import React from "react";
import { MovieBookmarkButton, MovieInfo, MovieInformationContainer, MovieInformationText, MovieName, MovieVote, MovieYear, MoviesPoster } from "./styled";
import {ReactComponent as BookmarkIcon} from "/Users/fish/movie-app/src/assets/icon-bookmark-empty.svg";
import {renderYear} from "/Users/fish/movie-app/src/utils/utils.js";

const MovieCardMain = (movie) => {
    return (
        <MovieInformationContainer>
            <MoviesPoster
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                alt={movie.title}
            />
            <MovieBookmarkButton>
                <BookmarkIcon />
            </MovieBookmarkButton>
            <MovieInformationText>
                <MovieInfo>
                    <MovieYear>{renderYear(movie.release_date)}</MovieYear>
                    <MovieVote>IMDB: {movie.vote_average}</MovieVote>
                </MovieInfo>
                <MovieName>{movie.title}</MovieName>
            </MovieInformationText>
        </MovieInformationContainer>
    );
}

export default MovieCardMain;