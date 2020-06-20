import React, { useEffect, useState } from "react";
import MovieItem from "src/components/MovieItem";
import MoviesDataFetcher from "src/external/MoviesDataFetcher";

const MoviesList = ({ searchTerm }) => {
  const [moviesListData, setMoviesListData] = useState([]);

  const getData = async () => {
    const incomingMoviesData = await MoviesDataFetcher(searchTerm);
    setMoviesListData(incomingMoviesData);
    console.log(">>>>>>moviesListData", incomingMoviesData);
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]);

  return moviesListData.map((movieData, index) => {
    return <MovieItem key={index} movieData={movieData} />;
  });
};

export default MoviesList;
