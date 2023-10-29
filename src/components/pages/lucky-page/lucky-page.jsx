import React, { useState } from "react";
import { LuckyButton, StyledLuckyPage, TryAgain } from "./styled";

import useSWR from "swr";

import MovieCardFull from "../../ui/movie-card-full/movie-card-full";
import { API_KEY, baseUrl } from "../../../const";

const LuckyPage = () => {
    const [movieID, setMovieID] = useState(203);
    const movieCard = `/movie/${movieID}?`;
    const url = baseUrl + movieCard + API_KEY + '&append_to_response=credits,videos,similar,watch/providers';
    const { data: movieInfo, error } = useSWR(url);
    console.log(movieInfo);

    if(error) return <h1>Something went wrong</h1>;
    if(!movieInfo) return <h1>Loading...</h1>;
    
    const handleClick = () => {
        setMovieID(Math.floor(Math.random() * 1000));
    };

    return (
        <StyledLuckyPage>
            <LuckyButton onClick={handleClick}>What to watch</LuckyButton>
            {movieInfo.id ? (
                <MovieCardFull key={movieInfo.id} {...movieInfo} />
            ) : (
                <TryAgain>
                    <LuckyButton onClick={handleClick}>Try again</LuckyButton>
                </TryAgain>
            )}
            
        </StyledLuckyPage>
    );
};

export default LuckyPage;