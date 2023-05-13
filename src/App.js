import { useEffect, useState } from 'react';
import axios from 'axios';
import HomePage from './components/pages/home-page/home-page';
import MoviesPage from './components/pages/movies-page/movies-page';
import TvSeriesPage from './components/pages/tv-series-page/tv-series-page';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AppRoute } from './const';
import PageWrapper from './components/layout/page-wrapper/page-wrapper';
import SearchPage from './components/pages/search-page/search-page';

const URL = "https://api.themoviedb.org/3";

export const API_KEY = "add8c0cdbdcd6f1026ba6df9d6cef47d";

const endpoints = {
  movies: "/movie/now_playing",
  popular: "/movie/popular",
  tvSeries: "/tv/top_rated",
};

function App() {
  const [movies, setMovies] = useState([]);
  const [popular, setPopular] = useState([]);
  const [tvSeries, setTvSeries] = useState([]);
  

  useEffect(() => {
    axios
      .get(`${URL}${endpoints.movies}`, {
        params: {
          api_key: API_KEY,
        },
      }).then((res) => setMovies(res.data.results));

      axios
      .get(`${URL}${endpoints.popular}`, {
        params: {
          api_key: API_KEY,
        },
      }).then((res) => setPopular(res.data.results));

      axios
        .get(`${URL}${endpoints.tvSeries}`, {
          params: {
            api_key: API_KEY,
          },
        }).then((res) => setTvSeries(res.data.results));
  }, []);
  
  useEffect(() => console.log(movies), [movies]);
  useEffect(() => console.log(popular), [popular]);
  useEffect(() => console.log(tvSeries), [tvSeries]);

  return (
    <>
      <Router>
        <Routes>
          <Route path={AppRoute.MAIN} element={<PageWrapper />}>
            <Route index path={AppRoute.MAIN} element={<HomePage 
                movie={movies[Math.floor(Math.random() * movies.length)]}
                movies={popular}
                shows={movies}
              />}
            />
            <Route path={AppRoute.HOME} element={<HomePage 
                movie={movies[Math.floor(Math.random() * movies.length)]}
                movies={popular}
                shows={movies}
              />}
            />
            <Route 
              path={AppRoute.MOVIES} 
              element={<MoviesPage 
                shows={movies} 
              />}/>
            <Route path={AppRoute.TVSERIES} element={<TvSeriesPage 
                shows={tvSeries}
              />} />
            <Route path={AppRoute.SEARCH} element={<SearchPage
              />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
