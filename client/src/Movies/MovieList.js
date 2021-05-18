import React from 'react';
import {Link} from 'react-router-dom';

export default function MovieList(props) {
  const { movieList } = props;
  console.log('test movielist')
  return (
    <div className="movie-list">
      {movieList.map(movie => (
        <Link key={movie.id} to={`/movielist/${movie.id}`}><MovieDetails  movie={movie} /></Link>
      ))}
    </div>

  );
}

function MovieDetails(props) {
  const {movie} = props;
  console.log("testmoviedetails");
  return (
    <div className="movie-card">
      <h2>{movie.title}</h2>
      <div className="movie-director">
        Director: <em>{movie.director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{movie.metascore}</strong>
      </div>
    </div>
  );
}
