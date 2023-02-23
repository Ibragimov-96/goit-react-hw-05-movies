import React, { useState, useEffect } from 'react';
import KEY from 'Key';
import { TopList, LinkFilms,Header } from './HomeStyle';
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
        <Header >Tranding to day</Header>
        <TopList>
          {films.map(film => {
            console.log(film)
            return (
              <li key={film.id}>
                <LinkFilms to={`/movies/${film.id}`}>
                  <img src={`https://image.tmdb.org/t/p/w300/${film.poster_path}`} alt="" />
                  {film.title}</LinkFilms>
              </li>
            );
          })}
        </TopList>
      </div>
    </>
  );
};
export default Home;
