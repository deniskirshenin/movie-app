import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { client } from "../../api/client";
import requests from "../../Requests";

const initialState = {
    movies: [],
    genresLoaded: false,
    genres: [],
};

export const fetchPopularMovies = createAsyncThunk('movies/fetchPopularMovies', async() => {
    try {
        const response = await client.get(requests.fetchPopular, 1);
        return response.data.results;
    } catch (error) {
        throw error;
    };
});

const popularMoviesSlice = createSlice({
    name: 'popularMovies',
    initialState,
    extraReducers: (builder) => {},
    
});

export default popularMoviesSlice.reducer;