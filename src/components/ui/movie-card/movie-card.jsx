import React from "react";
import { MovieBookmarkButtonColumn, MovieInfoColumn, MovieInformationContainerColumn, MovieInformationTextColumn, MovieNameColumn, MovieVoteColumn, MovieYearColumn, MoviesPosterColumn } from "./styled";
import {ReactComponent as BookmarkIcon} from "/Users/fish/movie-app/src/assets/icon-bookmark-empty.svg";
import {renderYear} from "/Users/fish/movie-app/src/utils/utils.js";

const MovieCard = (show) => {
    return (
        <MovieInformationContainerColumn>
            <MoviesPosterColumn
                src={`https://image.tmdb.org/t/p/original${show.backdrop_path}`}
                alt={show.title}
            />
            <MovieBookmarkButtonColumn>
                <BookmarkIcon />
            </MovieBookmarkButtonColumn>
            <MovieInformationTextColumn>
                <MovieInfoColumn>
                    <MovieYearColumn>{renderYear(show.release_date)}</MovieYearColumn>
                    <MovieVoteColumn>IMDB: {show.vote_average}</MovieVoteColumn>
                </MovieInfoColumn>
                <MovieNameColumn>{show.title}</MovieNameColumn>
            </MovieInformationTextColumn>
        </MovieInformationContainerColumn>
    );
};

export default MovieCard;