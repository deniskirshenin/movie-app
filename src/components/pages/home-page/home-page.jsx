import React, { Suspense } from "react";
import { StyledHomePage } from "./styled";
import Banner from "../../blocks/banner/banner";
import { useGetPopularMoviesQuery, useGetTopRatedMoviesQuery, useGetNowPlayingMoviesQuery, useGetUpcomingMoviesQuery, useGetMovieGenresQuery, useGetTVGenresQuery, useGetTrendingMoviesQuery, useGetTrendingTvSeriesQuery, useGetAiringTodayQuery, useGetOnTheAirQuery } from "../../../features/api/apiSlice";
import Row from "../../ui/row/row";
import RowMovieGenre from "../../ui/row-movies-genre/row-movies-genre";
import RowTvSeriesGenre from "../../ui/row-tv-series-genre/row-tv-series-genre";

const HomePage = () => {
  const {
    data: upcomingMovies,
    isLoading: upcomingLoading,
    isSuccess: upcomingSuccess,
    isError: upcomingError,
    error: upcomingErrorDetails
  } = useGetUpcomingMoviesQuery();
  const { data: trendingMovies, isLoading: trendingLoading, isSuccess: trendingSuccess, isError: trendingError, error: trendingErrorDetails } = useGetTrendingMoviesQuery();
  const { data: trendingTvSeries, isLoading: trendingTvLoading, isSuccess: trendingTvSuccess, isError: trendingTvError, error: trendingTvErrorDetails } = useGetTrendingTvSeriesQuery();
  const { data: nowPlayingMovies, isLoading: nowPlayingLoading, isSuccess: nowPlayingSuccess, isError: nowPlayingError, error: nowPlayingErrorDetails } = useGetNowPlayingMoviesQuery();
  const { data: popularMovies, isLoading: popularLoading, isSuccess: popularSuccess, isError: popularError, error: popularErrorDetails } = useGetPopularMoviesQuery();
  const { data: topRatedMovies, isLoading: topRatedLoading, isSuccess: topRatedSuccess, isError: topRatedError, error: topRatedErrorDetails } = useGetTopRatedMoviesQuery();
  const { data: movieGenres } = useGetMovieGenresQuery();
  const { data: tvGenres } = useGetTVGenresQuery();
  const { data: airingToday, isLoading: airingTodayLoading, isSuccess: airingTodaySuccess, isError: airingTodayError, error: airingTodayErrorDetails } = useGetAiringTodayQuery();
  const { data: onTheAir, isLoading: onTheAirLoading, isSuccess: onTheAirSuccess, isError: onTheAirError, error: onTheAirErrorDetails } = useGetOnTheAirQuery();

  console.log(upcomingMovies);
  return (
    <StyledHomePage>
      <Banner movie={upcomingMovies?.results[0]}/>
      {renderRow("Trending", trendingMovies, trendingLoading, trendingSuccess, trendingError, trendingErrorDetails)}
      {renderRow("Watch now TV Series", trendingTvSeries, trendingTvLoading, trendingTvSuccess, trendingTvError, trendingTvErrorDetails)}
      <Suspense fallback={<div>loading</div>}>
        {renderRow("Upcoming", upcomingMovies, upcomingLoading, upcomingSuccess, upcomingError, upcomingErrorDetails)}
        {renderRow("Now Playing", nowPlayingMovies, nowPlayingLoading, nowPlayingSuccess, nowPlayingError, nowPlayingErrorDetails)}
        {renderRow("Popular", popularMovies, popularLoading, popularSuccess, popularError, popularErrorDetails)}
        {renderRow("Top Rated", topRatedMovies, topRatedLoading, topRatedSuccess, topRatedError, topRatedErrorDetails)} 
        <RowMovieGenre title="Browse Movies" genreList={movieGenres} />;
        <RowTvSeriesGenre title="Browse TV series" genreList={tvGenres} />;
        {renderRow("Airing Today", airingToday, airingTodayLoading, airingTodaySuccess, airingTodayError, airingTodayErrorDetails)}
        {renderRow("On The Air", onTheAir, onTheAirLoading, onTheAirSuccess, onTheAirError, onTheAirErrorDetails)} 
      </Suspense>
    </StyledHomePage>
  );
};

export default HomePage;

const renderRow = (title, movies, isLoading, isSuccess, isError, error) => {
  if (isLoading) {
    return <div>loading</div>;
  } else if (isSuccess) {
    return <Row title={title} movies={movies.results} />;
  } else if (isError) {
    return <div>Error: {error.toString()}</div>;
  }
};
