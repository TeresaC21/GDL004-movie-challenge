import React from "react";
import { Link } from "react-router-dom";

const HomeView = () => {
  return (
    <div>
      <Link to="/movies/superman">Superman</Link>
      &nbsp;
      <Link to="/movies/batman">Batman</Link>
    </div>
  );
};

export default HomeView;
