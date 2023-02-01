import { useParams, Outlet } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Author } from './ReviewsStyle';
import KEY from 'Key';
const Reviews = () => {
  const { movieId } = useParams();

  const [films, setFilms] = useState([]);

  
  const API = `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${KEY}`;

  useEffect(() => {
    fetch(API)
      .then(responce => {
        if (responce.ok) {
          return responce.json();
        }

        return Promise.reject(new Error(`Нет таких `));
      })
      .then(films => {
        setFilms(films.results);
      });
  }, [API, movieId]);
  if (films.length === 0) {
    return <p>No information about reviews</p>;
  }
  return (
    <>
      <ul>
        {films.map(film => {
          return (
            <li key={film.id}>
              <Author>Author: {film.author}</Author>
              <br />
              <p>{film.content}</p>
            </li>
          );
        })}
      </ul>
      <Outlet />
    </>
  );
};
export default Reviews;
