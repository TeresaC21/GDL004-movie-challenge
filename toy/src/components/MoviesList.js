import React from "react";
import MovieItem from "src/components/MovieItem";

const MoviesList = ({ searchTerm }) => {
  const moviesListData = [{ title: "sup" + searchTerm }, { title: "sup" }];
  return moviesListData.map((movieData, index) => {
    console.log("<<<<<movieData", movieData);

    return <MovieItem key={index} movieData={movieData} />;
  });
};

export default MoviesList;
