import HomePage from './components/pages/home-page/home-page';
import MoviesPage from './components/pages/movies-page/movies-page';
import TvSeriesPage from './components/pages/top-rated-page/top-rated-page';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AppRoute } from './const';
import PageWrapper from './components/layout/page-wrapper/page-wrapper';
import SearchPage from './components/pages/search-page/search-page';
import BookmarkPage from './components/pages/bookmarked-page/bookmarked-page';
import { GlobalProvider } from './contexts/GlobalState';

function App() {
  return (
      <GlobalProvider>
      <Router>
        <Routes>
          <Route path={AppRoute.MAIN} element={<PageWrapper />}>
            <Route index path={AppRoute.MAIN} element={<HomePage />}/>
            <Route path={AppRoute.HOME} element={<HomePage />}/>
            <Route path={AppRoute.MOVIES} element={<MoviesPage />}/>
            <Route path={AppRoute.TVSERIES} element={<TvSeriesPage />} />
            <Route path={AppRoute.BOOKMARK} element={<BookmarkPage />} />
            <Route path={AppRoute.SEARCH} element={<SearchPage/>} />
          </Route>
        </Routes>
      </Router>
      </GlobalProvider>
  );
}

export default App;
