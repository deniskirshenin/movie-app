import React, { useState } from "react";
import { StyledLuckyPage } from "./styled";
import { URL } from "../../../api/api";

import useSWR from "swr";
import { API_KEY } from "../../../api/api_key";
import MovieCardFull from "../../ui/movie-card-full/movie-card-full";

const LuckyPage = () => {
    const [movieID, setMovieID] = useState(203);
    const movieCard = `/movie/${movieID}?`;
    const url = URL + movieCard + API_KEY + '&append_to_response=credits,videos,similar,watch/providers';
    const { data: movieInfo, error } = useSWR(url);
    console.log(movieInfo);

    if(error) return <h1>Something went wrong</h1>;
    if(!movieInfo) return <h1>Loading...</h1>;
    
    const handleClick = () => {
        setMovieID(Math.floor(Math.random() * 1000));
    };

    return (
        <StyledLuckyPage>
            <button onClick={handleClick}>watch something</button>
            <MovieCardFull key={movieInfo.id} {...movieInfo} />
        </StyledLuckyPage>
    );
};

export default LuckyPage;