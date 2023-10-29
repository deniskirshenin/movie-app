export const API_KEY = "add8c0cdbdcd6f1026ba6df9d6cef47d";

const requests = {
    fetchTrendingMovies: '/trending/movie/day?language=en-US',
    fetchNowPlaying: '/movie/now_playing',
    fetchPopular: '/movie/popular',
    fetchTopRated: '/movie/top_rated',
    fetchUpComing: '/movie/upcoming',
    fetchMovieGenres: '/genre/movie/list',
    fetchTVGenres: '/genre/tv/list',
    fetchTrendingTvSeries: '/trending/tv/day?language=en-US',
    fetchAiringToday: '/tv/airing_today',
    fetchOnTheAir: '/tv/on_the_air'
}

export default requests;