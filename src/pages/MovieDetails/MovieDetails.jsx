import { useParams, Outlet, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import KEY from 'Key';
import { ListFilms, BtnBack, Datails, BtnNav } from './MoviesDatailStyle';
const MovieDetails = () => {
  const { movieId } = useParams();

  const [films, setFilms] = useState([]);

  
  const API = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${KEY}`;
  const location = useLocation();

  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    fetch(API)
      .then(responce => {
        if (responce.ok) {
          return responce.json();
        }

        return Promise.reject(new Error(`Нет таких `));
      })
      .then(films => {
        setFilms([films]);

        //    {films.results.map(film=>console.log(film.title))}
      });
  }, [API, movieId]);
  return (
    <>
      <BtnBack to={backLinkHref}>Go to back</BtnBack>
      <ul>
        {films.map(film => {
          return (
            <ListFilms key={film.id}>
              {' '}
              <img
                src={`https://image.tmdb.org/t/p/w300/${film.poster_path}`}
                alt={film.poster_path}
              />
              <div>
                <h2>{film.title}</h2>
                <p>User Score: {film.vote_average}</p>
                <h2>Overview: </h2>
                <p>{film.overview}</p>
                <h2>Genres</h2>
                <ul>
                  {film.genres.map(name => {
                    return (
                      <li key={name.name}>
                        <p>{name.name}</p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </ListFilms>
          );
        })}
      </ul>
      <div>
        <Datails>
          <li>
            <BtnNav to="cast" state={location.state}>
              Cast
            </BtnNav>
          </li>
          <li>
            <BtnNav to="reviews" state={location.state}>
              Reviews
            </BtnNav>
          </li>
        </Datails>
      </div>

      <Outlet />
    </>
  );
};
export default MovieDetails;
