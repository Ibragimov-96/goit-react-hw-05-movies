import { useParams, Outlet } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { CastList } from './CastStyle';
import img from '../../img/error.png';
import KEY from 'Key';
const Cast = () => {
  const { movieId } = useParams();

  const [cast, setCast] = useState([]);
 
  const API = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${KEY}`;

  useEffect(() => {
    fetch(API)
      .then(responce => {
        if (responce.ok) {
          return responce.json();
        }

        return Promise.reject(new Error(`Нет таких `));
      })
      .then(films => {
        setCast(films.cast);
      });
  }, [API, movieId]);
  if (cast.length === 0) {
    return <p>No information about actors</p>;
  }
  return (
    <>
      <CastList>
        {cast.map(actor => {
          return (
            <li key={actor.id}>
              <img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w300/${actor.profile_path}`
                    : img
                }
                alt={actor.profile_path}
              />
              <h3>{actor.name}</h3>
            </li>
          );
        })}
      </CastList>
      <Outlet />
    </>
  );
};
export default Cast;
