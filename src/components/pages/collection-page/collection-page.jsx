import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetMoviesByCollectionQuery } from '../../../features/api/apiSlice';
import ShowsGrid from '../../ui/shows-grid/shows-grid';

function CollectionPage() {
  const { collectionId } = useParams();

  const { data: collectionMovies, isFetching, isSuccess, isError } = useGetMoviesByCollectionQuery(collectionId);

  let content;

  if(isFetching) {
    content = <h1>Loading...</h1>;
} else if(isSuccess) {
    content = (
      <>
        <ShowsGrid shows={collectionMovies.results} />
      </>);
} else if(isError) {
    content = <h2>Try again</h2>;
}

  return (
    <div>{content}</div>
  )
}

export default CollectionPage;