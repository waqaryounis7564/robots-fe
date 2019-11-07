import React from "react";
import "tachyons";

const Search = props => {
  return (
    <div className="pa2">
      <input
        type="search"
        placeholder="search robots"
        onChange={props.change}
        className="pa3 ba b--green bg-light-yellow"
      ></input>
    </div>
  );
};

export default Search;
