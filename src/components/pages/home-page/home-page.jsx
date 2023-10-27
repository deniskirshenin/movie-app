import React from "react";
import { StyledHomePage } from "./styled";
import Banner from "../../blocks/banner/banner";
import { useGetPopularMoviesQuery, useGetTopRatedMoviesQuery, useGetNowPlayingMoviesQuery, useGetUpcomingMoviesQuery, useGetMovieGenresQuery, useGetTVGenresQuery } from "../../../features/api/apiSlice";
import Row from "../../ui/row/row";
import RowGenre from "../../ui/row-genre/row-genre";

const HomePage = () => {
  const {
    data: upcomingMovies,
    isLoading: upcomingLoading,
    isSuccess: upcomingSuccess,
    isError: upcomingError,
    error: upcomingErrorDetails
  } = useGetUpcomingMoviesQuery();
  const { data: nowPlayingMovies, isLoading: nowPlayingLoading, isSuccess: nowPlayingSuccess, isError: nowPlayingError, error: nowPlayingErrorDetails } = useGetNowPlayingMoviesQuery();
  const { data: popularMovies, isLoading: popularLoading, isSuccess: popularSuccess, isError: popularError, error: popularErrorDetails } = useGetPopularMoviesQuery();
  const { data: topRatedMovies, isLoading: topRatedLoading, isSuccess: topRatedSuccess, isError: topRatedError, error: topRatedErrorDetails } = useGetTopRatedMoviesQuery();
  const { data: movieGenres } = useGetMovieGenresQuery();
  const { data: tvGenres } = useGetTVGenresQuery();


  return (
    <StyledHomePage>
      <Banner />
      {renderRow("Upcoming", upcomingMovies, upcomingLoading, upcomingSuccess, upcomingError, upcomingErrorDetails)}
      {renderRow("Now Playing", nowPlayingMovies, nowPlayingLoading, nowPlayingSuccess, nowPlayingError, nowPlayingErrorDetails)}
      {renderRow("Popular", popularMovies, popularLoading, popularSuccess, popularError, popularErrorDetails)}
      {renderRow("Top Rated", topRatedMovies, topRatedLoading, topRatedSuccess, topRatedError, topRatedErrorDetails)}
      <RowGenre title="Browse Movies" genreList={movieGenres} />;
      <RowGenre title="Browse TV series" genreList={tvGenres} />;
    </StyledHomePage>
  );
};

export default HomePage;

const renderRow = (title, movies, isLoading, isSuccess, isError, error, collectionId) => {
  if (isLoading) {
    return <div>loading</div>;
  } else if (isSuccess) {
    return <Row title={title} movies={movies.results} collectionId={collectionId} />;
  } else if (isError) {
    return <div>Error: {error.toString()}</div>;
  }
};