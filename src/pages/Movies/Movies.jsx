import { Input, Btn, Form, LinkFilm, Films } from './MoviesStyle';
import { Outlet, useLocation, useSearchParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import img from '../../img/error.png';
import KEY from 'Key';
const Movies = () => {
  const [searchFilm, setSearchFilm] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const film = searchParams.get('film');

 
  const API = `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=${film}`;

  const handleFilms = e => {
    e.preventDefault();

    if (e.target.elements.film.value === '') {
      return;
    }

    setSearchParams({ film: e.target.elements.film.value });
  };
  const location = useLocation();

  useEffect(() => {
    if (!film) {
      return;
    }
    fetch(API)
      .then(responce => {
        if (responce.ok) {
          return responce.json();
        }

        return Promise.reject(new Error(`Нет таких картинок фильмов`));
      })
      .then(films => {
        if (films.results.length === 0) {
          toast('Нет фильмов с таким названием ');
          setSearchFilm([]);
          return;
        }
        setSearchFilm(films.results);
      });
  }, [API, film]);
  return (
    <>
      <Form className="SearchForm" onSubmit={handleFilms}>
        <Input
          name="film"
          className="SearchForm-input"
          type="text"
          placeholder="Search images and films"
        />
        <Btn className="SearchForm-button">
          <span>Search</span>
        </Btn>
      </Form>
      <br />

      <div>
        <Films>
          {searchFilm.map(films => {
            return (
              <li key={films.id}>
                <LinkFilm to={`/movies/${films.id}`} state={{ from: location }}>
                  <img
                    src={
                      films.poster_path
                        ? `https://image.tmdb.org/t/p/w300/${films.poster_path}`
                        : img
                    }
                    alt={films.poster_path}
                  />

                  <p>{films.title}</p>
                </LinkFilm>
              </li>
            );
          })}
        </Films>
      </div>
      <Outlet />
    </>
  );
};
export default Movies;
