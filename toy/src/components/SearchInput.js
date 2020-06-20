import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const SearchInput = () => {
  const [value, setValue] = useState("");
  const history = useHistory();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleOnKeyDown = (e) => {
    if (e.key === "Enter") {
      history.push(`/movies/${value}`);
    }
  };

  return (
    <input
      value={value}
      onKeyDown={handleOnKeyDown}
      onChange={handleChange}
      type="text"
    />
  );
};

export default SearchInput;
