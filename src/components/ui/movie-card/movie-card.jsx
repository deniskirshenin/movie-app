import React, {useContext} from "react";
import { GlobalContext } from "../../../contexts/GlobalState";
import { MovieBookmarkButtonAdd, MovieBookmarkButtonRemove, MovieInfoColumn, MovieInformationContainerColumn, MovieInformationTextColumn, MovieNameColumn, MovieVoteColumn, MovieYearColumn, MoviesPosterColumn } from "./styled";
import {ReactComponent as BookmarkAdd} from "../../../assets/icon-bookmark-empty.svg";
import {ReactComponent as BookmarkRemove} from "../../../assets/icon-bookmark-full.svg";
import {renderYear} from "../../../utils/utils";
import noImage from "../../../assets/no-image.png";

const MovieCard = (show) => {
    const {addMovieToWatchList, removeMovieFromWatchList, watchlist} = useContext(GlobalContext);

    const bookmarked = watchlist.find(o => o.id === show.id);

    return (
        <MovieInformationContainerColumn>
            {show.backdrop_path ? 
            (<MoviesPosterColumn
            src={`https://image.tmdb.org/t/p/w440_and_h660_face${show.backdrop_path}`}
            alt={show.title}
            />) : (
                <MoviesPosterColumn
                src={noImage}
                alt={show.title}
                />)}
            {bookmarked === undefined ? (
                <MovieBookmarkButtonAdd
                    onClick={() => addMovieToWatchList(show)}>
                    <BookmarkAdd />
                </MovieBookmarkButtonAdd>
            ) : (<MovieBookmarkButtonRemove
                    onClick={() => removeMovieFromWatchList(show.id)}>
                    <BookmarkRemove />
                </MovieBookmarkButtonRemove>)}
            
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