import React from "react";

const MovieItem = ({ movieData }) => {
  console.log(">>>>>>params", movieData);
  return <div>{movieData.title}</div>;
};

export default MovieItem;
