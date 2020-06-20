import React from "react";
import MoviesList from "src/components/MoviesList";

const MoviesView = () => {
  const searchTerm = "supaman";
  return <MoviesList searchTerm={searchTerm} />;
};

export default MoviesView;
