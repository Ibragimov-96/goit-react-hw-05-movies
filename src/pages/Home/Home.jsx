import React, { useState, useEffect } from 'react';
import KEY from 'Key';
import { TopList, LinkFilms } from './HomeStyle';
const Home = () => {
  const [films, setFilms] = useState([]);
  
  const API = `https://api.themoviedb.org/3/trending/movie/day?api_key=${KEY}`;

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
  }, [API]);

  return (
    <>
      <div>
        <h1>Tranding to day</h1>
        <TopList>
          {films.map(film => {
            return (
              <li key={film.id}>
                <LinkFilms to={`/movies/${film.id}`}>{film.title}</LinkFilms>
              </li>
            );
          })}
        </TopList>
      </div>
    </>
  );
};
export default Home;
