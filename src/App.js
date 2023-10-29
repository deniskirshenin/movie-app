import HomePage from './components/pages/home-page/home-page';
import MoviesPage from './components/pages/movies-page/movies-page';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AppRoute } from './const';
import PageWrapper from './components/layout/page-wrapper/page-wrapper';
import SearchPage from './components/pages/search-page/search-page';
import { GlobalStyle } from './styles';
import MovieFullCardPage from './components/pages/movie-full-card-page/movie-full-card-page';
import CollectionPage from './components/pages/collection-page/collection-page';
import MoviesGenrePage from './components/pages/movies-genre-page/movies-genre-page';
import TvSeriesGenrePage from './components/pages/tv-series-genre-page/tv-series-genre-page';
import TvSeriesPage from './components/pages/tv-series-page/tv-series-page';

function App() {
  return (
    <>
    <GlobalStyle />
        <Router>
            <Routes>
              <Route path={AppRoute.MAIN} element={<PageWrapper />}>
                <Route index path={AppRoute.MAIN} element={<HomePage />}/>
                <Route path={AppRoute.HOME} element={<HomePage />}/>
                <Route path={AppRoute.MOVIES} element={<MoviesPage />}/>
                <Route path={AppRoute.TVSERIES} element={<TvSeriesPage />} />
                <Route path={AppRoute.SEARCH} element={<SearchPage/>} />
                <Route path={AppRoute.DETAILS} element={<MovieFullCardPage />} />
                <Route path={AppRoute.LIST} element={<CollectionPage />} />
                <Route path={AppRoute.MOVIEGENRE} element={<MoviesGenrePage />} />
                <Route path={AppRoute.TVSERIESGENRE} element={<TvSeriesGenrePage/>} />
              </Route>
            </Routes>
          </Router>
    </>
  );
}

export default App;
