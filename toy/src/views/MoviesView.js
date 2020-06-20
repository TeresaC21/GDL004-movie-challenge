import React from "react";
import MoviesList from "src/components/MoviesList";
import { useParams } from "react-router-dom";

const MoviesView = () => {
  const urlParams = useParams();
  return <MoviesList searchTerm={urlParams.searchTerm} />;
};

export default MoviesView;
