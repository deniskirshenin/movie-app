import React from 'react';
import { useParams } from 'react-router-dom';
import ShowsGrid from '../../ui/shows-grid/shows-grid';
import { useGetMoviesByGenreQuery } from '../../../features/api/apiSlice';

function MoviesGenrePage() {
  const { movieGenreId } = useParams();

  const { data: genreMovies, isFetching, isSuccess, isError } = useGetMoviesByGenreQuery(movieGenreId);

  console.log(genreMovies);

  let content;

  if(isFetching) {
    content = <h1>Loading...</h1>;
} else if(isSuccess) {
    content = (
      <>
        <ShowsGrid shows={genreMovies.results} />
      </>);
} else if(isError) {
    content = <h2>Try again</h2>;
}

  return (
    <div>{content}</div>
  )
}

export default MoviesGenrePage;