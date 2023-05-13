import React from "react";
import {ReactComponent as BookmarkIcon} from "/Users/fish/movie-app/src/assets/icon-bookmark-empty.svg";
import { TvSeriesBookmarkButton, TvSeriesInfo, TvSeriesInformationContainer, TvSeriesInformationText, TvSeriesName, TvSeriesPoster, TvSeriesVote, TvSeriesYear } from "./styled";
import {renderYear} from "/Users/fish/movie-app/src/utils/utils.js";

const TvSeriesCard = (show) => {
    return (
        <TvSeriesInformationContainer>
            <TvSeriesPoster
                src={`https://image.tmdb.org/t/p/original${show.backdrop_path}`}
                alt={show.name}
            />
            <TvSeriesBookmarkButton>
                <BookmarkIcon />
            </TvSeriesBookmarkButton>
            <TvSeriesInformationText>
                <TvSeriesInfo>
                    <TvSeriesYear>{renderYear(show.first_air_date)}</TvSeriesYear>
                    <TvSeriesVote>IMDB: {show.vote_average}</TvSeriesVote>
                </TvSeriesInfo>
                <TvSeriesName>{show.name}</TvSeriesName>
            </TvSeriesInformationText>
        </TvSeriesInformationContainer>
    );
};

export default TvSeriesCard;