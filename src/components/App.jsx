import { Route, Routes } from 'react-router-dom';
import { Header } from './Header/Header.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { lazy } from 'react';
const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails.jsx'));
const Cast = lazy(() => import('pages/Cast/Cast.jsx'));
const Reviews = lazy(() => import('pages/Reviews/Reviews.jsx'));
const NotFound = lazy(() => import('pages/NotFound/NotFound.jsx'))
export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
};
