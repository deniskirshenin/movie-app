export const API_KEY = "add8c0cdbdcd6f1026ba6df9d6cef47d";

const requests = {
    fetchNowPlaying: '/movie/now_playing',
    fetchPopular: '/movie/popular',
    fetchTopRated: '/movie/top_rated',
    fetchUpComing: '/movie/upcoming',
    fetchMovieGenres: '/genre/movie/list',
    fetchTVGenres: '/genre/tv/list',
    fetchActionMovies: '/discover/movie?with_genres=28',
    fetchComedyMovies: '/discover/movie?with_genres=35',
    fetchHorrorMovies: '/discover/movie?with_genres=27',
    fetchRomanceMovies: '/discover/movie?with_genres=10749',
    fetchDocumentaries: '/discover/movie?with_genres=99',
}

export default requests;