import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import requests from '../../Requests';
import { API_KEY, baseUrl } from '../../const';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery:  fetchBaseQuery({ 
        baseUrl: baseUrl,
        prepareHeaders: (headers) => {
            headers.set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZGQ4YzBjZGJkY2Q2ZjEwMjZiYTZkZjlkNmNlZjQ3ZCIsInN1YiI6IjY0NThlNGMxNmM4NDkyMDBmZGQwMTU5ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FJtzXreED1kA6i_swiNMF3k7zFxNygIPrTUChxhOPRw')
        }
     }),
    endpoints: builder => ({
        getNowPlayingMovies: builder.query({
            query: () => requests.fetchNowPlaying
        }),
        getPopularMovies: builder.query({
            query: () => requests.fetchPopular
        }),
        getTopRatedMovies: builder.query({
            query: () => requests.fetchTopRated
        }),
        getUpcomingMovies: builder.query({
            query: () => requests.fetchUpComing
        }),
        getMovieGenres: builder.query({
            query: () => requests.fetchMovieGenres
        }),
        getTVGenres: builder.query({
            query: () => requests.fetchTVGenres
        }),
        getMovie: builder.query({
            query: (movieId) => `/movie/${movieId}?api_key=${API_KEY}&append_to_response=credits,videos,similar,watch/providers`
        }),
        getMoviesByCollection: builder.query({
            query: (collectionId) => `/movie/${collectionId}`
        }),
        getMoviesByGenre: builder.query({
            query: (movieGenreId) => `/discover/movie?with_genres=${movieGenreId}`
        }),
        getTvSeriesByGenre: builder.query({
            query: (tvSeriesGenreId) => `/discover/tv?with_genres=${tvSeriesGenreId}`
        }),
        getTrendingMovies: builder.query({
            query: () => requests.fetchTrendingMovies
        }),
        getTrendingTvSeries: builder.query({
            query: () => requests.fetchTrendingTvSeries
        }),
        getAiringToday: builder.query({
            query: () => requests.fetchAiringToday
        }),
        getOnTheAir: builder.query({
            query: () => requests.fetchOnTheAir
        })
    })
})

export const { 
    useGetNowPlayingMoviesQuery, 
    useGetPopularMoviesQuery, 
    useGetUpcomingMoviesQuery,
    useGetTopRatedMoviesQuery,
    useGetMovieQuery,
    useGetMoviesByCollectionQuery,
    useGetMovieGenresQuery,
    useGetTVGenresQuery,
    useGetMoviesByGenreQuery,
    useGetTvSeriesByGenreQuery,
    useGetTrendingMoviesQuery,
    useGetTrendingTvSeriesQuery,
    useGetAiringTodayQuery,
    useGetOnTheAirQuery
} = apiSlice;