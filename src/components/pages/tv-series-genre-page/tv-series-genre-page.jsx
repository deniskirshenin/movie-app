import React from 'react';
import { useParams } from 'react-router-dom';
import ShowsGrid from '../../ui/shows-grid/shows-grid';
import { useGetTvSeriesByGenreQuery } from '../../../features/api/apiSlice';

function TvSeriesGenrePage() {
  const { tvSeriesGenreId } = useParams();

  const { data: genreMovies, isFetching, isSuccess, isError } = useGetTvSeriesByGenreQuery(tvSeriesGenreId);

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

export default TvSeriesGenrePage;