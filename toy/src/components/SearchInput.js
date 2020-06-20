import React, { useState } from "react";

const SearchInput = () => {
  const [value, setValue] = useState("");
  return (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      type="text"
    />
  );
};

export default SearchInput;
