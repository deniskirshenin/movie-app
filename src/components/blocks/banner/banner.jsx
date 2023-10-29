import axios from '../../../axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import requests from '../../../Requests';
import { imageUrl } from '../../../const';
import { Link } from 'react-router-dom';
import { MdArrowForwardIos, MdPlayArrow } from 'react-icons/md';
import { AiOutlinePlus } from 'react-icons/ai'

export const BannerSection = styled.section`
    position: relative;
    background-size: cover;
    background-position: center center;
    height: 50vh;
    color: #fff;
    object-fit: contain;
    margin: 0 0 20px 0;

    @media (min-width: 768px) {
        height: 70vh;
    }
`;

export const BannerContents = styled.div`
    margin-left: 30px;
    padding-top: 40%;

    @media (min-width: 768px) {
        padding-top: 35%;
        height: 150px;
    }

    @media (min-width: 1200px) {
        padding-top: 260px;
        height: 190px;
    }
`;

export const BannerTitle = styled.h1`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    position: relative;
    font-size: 1rem;
    font-weight: 800;
    text-transform: uppercase;
    color: #fff;
    padding-bottom: 0.3rem;
    z-index: 2;

    @media (min-width: 768px) {
        font-size: 2rem;
    }

    @media (min-width: 1200px) {
        font-size: 3rem;
    }
`;

export const BannerButtons = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 15px;

    @media (min-width: 768px) {
        flex-wrap: nowrap;
    }
`;

export const BannerDescription = styled.p`
    position: relative;
    width: 45rem;
    line-height: 1.3;
    padding-bottom: 1rem;
    font-size: 0.8rem;
    max-width: 280px;
    height: 80px;
    word-break: normal;
    z-index: 2;

    @media (min-width: 768px) {
        width: 360px;
    }
`;

export const BannerButton = styled.button`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
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
    height: 50vh;
    z-index: 1;
    background-image: linear-gradient(
        180deg,
        transparent,
        rgba(0, 0, 0, 0.25) 40%,
        #000
    );

    @media (min-width: 768px) {
        height: 70vh;
    }
`;

export const BannerLink = styled(Link)`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    text-transform: uppercase;
    text-align: center;
    font-size: 1rem;
    line-height: 1.3rem;
    font-weight: 600;
    color: #000;
    background-color: #fff;
    border: 2px solid #fff;
    padding: 8px 12px;
    outline: 0;
    z-index: 2;

    &:hover {
        color: #000;
        background-color: #e6e6e6;
        transition: all 0.2s;
    }
`;

export const TitleLink = styled(Link)`
    text-decoration: none;
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
    <BannerSection
        style={{
            backgroundImage: `url("${imageUrl}${movie?.backdrop_path}")`
        }}
    >
        <BannerFade />   
        <BannerContents>
            <TitleLink>
                <BannerTitle>{movie?.title || movie?.name || movie?.original_name}<MdArrowForwardIos /></BannerTitle>
            </TitleLink>
            
            <BannerDescription>{truncate(movie?.overview, 150)}</BannerDescription>
            <BannerButtons>
                <BannerLink to={`/movie/${movie.id}`}><MdPlayArrow />Watch Trailer</BannerLink>
                <BannerLink>Add to My List<AiOutlinePlus /></BannerLink>
            </BannerButtons>
        </BannerContents>
    </BannerSection>
  )
};

export default Banner;