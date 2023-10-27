import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MdArrowForwardIos } from "react-icons/md";
import { GridRow } from '../../grid/gridRow';

export const StyledRow = styled.div`
    color: #fff;
    margin: 0;
`;

export const RowPosterLink = styled(Link)`
    display: grid;
    place-items: center;
    text-decoration: none;
    text-align: center;
    transition: all ease-in-out 450ms;
    height: 100%;
    width: 100%;
    color: #c4d4c3;
    padding: 50px;
    background-color: #DC343B;
    border-radius: 12px;

    &:hover {
        transform: scale(1.08);
        opacity: 0.85;
    }
`;

export const RowHeader = styled.div`
    padding: 13px 25px;
`;

export const RowHeaderLink = styled(Link)`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 1.7rem;
    font-weight: 700;
    line-height: 1.3rem;
    color: #c4d3c3;
    text-decoration: none;
`;

function RowMovieGenre({ title, genreList }) {
    return (
        <StyledRow>
            <RowHeader>
                <RowHeaderLink to={'/'}>
                    {title}
                    <MdArrowForwardIos />
                </RowHeaderLink>
            </RowHeader>
            <GridRow>
                {genreList && genreList.genres.map((genre) => (
                    <RowPosterLink key={genre.id} to={`/movies-genres/${genre.id}`}>
                            {genre.name}
                    </RowPosterLink> 
                ))}
            </GridRow>
        </StyledRow>
    );
};

export default RowMovieGenre;