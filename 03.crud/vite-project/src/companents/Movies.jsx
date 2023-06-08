import React from "react";
import Movie from "./Movie";
import axios from "axios"

const Movies = ({ movies, baseUrl, setMovies }) => {
  const dltMovies = (id) => {
    axios.delete(`${baseUrl}/${id}`);

    const filtered = movies.filter((item) => item.id != id);
    setMovies(filtered);
  };

  return (
    <div className="cards">
      {movies.map((item) => (
        <Movie key={item.id} movie={item} dltMovies={dltMovies}/>
      ))}
    </div>
  );
};

export default Movies;
