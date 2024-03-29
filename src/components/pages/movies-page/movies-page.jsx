import React from 'react';
import { CollectionGrid, Grid } from '../../grid/grid';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useGetMovieGenresQuery } from '../../../features/api/apiSlice';

export const RowHeader = styled.h2`
    padding: 15px 0;
`;

export const RowPosterLink = styled(Link)`
    display: grid;
    place-items: center;
    text-decoration: none;
    text-align: center;
    transition: all ease-in-out 450ms;
    height: 100%;
    width: 100%;
    color: #fff;
    padding: 40px;
    background-color: #DC343B;

    &:hover {
        transform: scale(1.08);
        opacity: 0.85;
    }
`;

const MoviesPage = () => {
    const { data: movieGenres } = useGetMovieGenresQuery();
    return (
        <CollectionGrid>
            <RowHeader>
                Movies
            </RowHeader>
            <Grid>
                {movieGenres && movieGenres.genres.map((genre) => (
                    <RowPosterLink key={genre.id} to={`/movies-genres/${genre.id}`}>
                        {genre.name}
                    </RowPosterLink> 
                ))}
            </Grid>
        </CollectionGrid>
    )
}

export default MoviesPage