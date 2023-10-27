import axios from '../../../axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import requests from '../../../Requests';
import { imageUrl } from '../../../const';

export const StyledBanner = styled.section`
    position: relative;
    background-size: cover;
    background-position: center center;
    height: 70vh;
    color: white;
    object-fit: contain;
    margin: 0 0 20px 0;
`;

export const BannerContents = styled.div`
    margin-left: 30px;
    padding-top: 140px;
    height: 190px;
`;

export const BannerTitle = styled.h1`
    font-size: 3rem;
    font-weight: 800;
    padding-bottom: 0.3rem;
`;

export const BannerButtons = styled.div`
    display: flex;
`;

export const BannerDescription = styled.p`
    width: 45rem;
    line-height: 1.3;
    padding-top: 1rem;
    font-size: 0.8rem;
    max-width: 360px;
    height: 80px;
    word-break: normal;
`;

export const BannerButton = styled.button`
    cursor: pointer;
    color: #fff;
    outline: none;
    border: none;
    font-weight: 700;
    border-radius: 0.2vw;
    padding: 0.5rem 2rem;
    background-color: rgba(51, 51, 51, 0.5);
    margin-right: 1rem;

    &:hover {
        color: #000;
        background-color: #e6e6e6;
        transition: all 0.2s;
    }
`;

export const BannerFade = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 70vh;
    background-image: linear-gradient(
        180deg,
        transparent,
        rgba(0, 0, 0, 0.25) 40%,
        #000
    );
`;

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchPopular);
            const randomIndex = Math.floor(Math.random() * request.data.results.length);
            setMovie(request.data.results[randomIndex]);    
        }

        fetchData();
    }, []);

    function truncate(string, n) {
        return (string?.length > n) ? string.substring(0, n - 1) + '...' : string;
    }

  return (
    <StyledBanner
        style={{
            backgroundImage: `url("${imageUrl}${movie?.backdrop_path}")`
        }}
    >
        <BannerContents>
            <BannerTitle>{movie?.title || movie?.name || movie?.original_name}</BannerTitle>
            <BannerButtons>
                <BannerButton>Play</BannerButton>
                <BannerButton>Add to My List</BannerButton>
            </BannerButtons>
            <BannerDescription>{truncate(movie?.overview, 150)}</BannerDescription>
        </BannerContents>
        <BannerFade />
    </StyledBanner>
  )
};

export default Banner;