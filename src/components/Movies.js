import React from 'react';
import { movies } from '../data';

{console.log(movies[0].title)}

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie, index) => (
        <div key={index}>
          <h3>{movie.title}</h3>
        </div>
      ))}  
    </div>
  );
};

export default Movies;
