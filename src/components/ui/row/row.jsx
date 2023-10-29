import React from 'react';
import { imageUrl } from '../../../const';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MdArrowForwardIos } from "react-icons/md";
import { GridRow } from '../../grid/gridRow';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const StyledRow = styled.div`
    color: #fff;
    margin: 0;
    position: relative;

    &::after {
        content: "";
        position: absolute;
        border-bottom: 2px solid #232D3F;
        width: 80%;
        left: 10%;
    }
`;

export const RowPosterLink = styled(Link)`
    display: grid;
    text-decoration: none;
    transition: all ease-in-out 450ms;
    height: 100%;
    width: 100%;
    color: #fff;

    &:hover {
        transform: scale(1.08);
        opacity: 0.85;
        color: #008170;
    }
`;

export const RowPoster = styled(LazyLoadImage)`
    object-fit: cover;
    width: 100%;
`;

export const RowHeader = styled.div`
    padding: 13px 25px;
`;

export const RowTitle = styled.h2`
    display: flex;
    align-items: center;
    text-align: left;
    gap: 5px;
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 300;
    color: #fff;
    padding: 10px 0;
    margin: 0;
`;

export const RowHeaderLink = styled(Link)`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 1.7rem;
    font-weight: 700;
    line-height: 1.3rem;
    color: #fff;
    text-decoration: none;
`;

function Row({ title, movies }) {
    return (
        <StyledRow>
            <RowHeader>
                <RowHeaderLink to={`collection/${title.toLowerCase().replaceAll(" ", "_")}`}>
                    {title}
                    <MdArrowForwardIos />
                </RowHeaderLink>
            </RowHeader>
            <GridRow>
                {movies.map(movie => (
                    (movie.backdrop_path) && (
                        <RowPosterLink to={`/movie/${movie.id}`}>
                            <RowPoster
                                key={movie.id}
                                src={`${imageUrl}${movie.backdrop_path}`} alt={movie.name}
                                effect="blur"
                            />
                            <RowTitle>
                                {movie.original_title || movie.original_name}
                                <MdArrowForwardIos />
                            </RowTitle>
                        </RowPosterLink> 
                    )
                ))}
            </GridRow>
        </StyledRow>
    );
};

export default Row;