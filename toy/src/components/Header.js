import React from "react";
import SearchInput from "src/components/SearchInput";

const Header = () => {
  return (
    <div>
      [
      <span role="img" aria-labelledby="movie">
        🎥
      </span>
      Logo]
      <SearchInput />
    </div>
  );
};

export default Header;
