import React from "react";

function Search({ onSearch }) {

  function handleSearch(e) {
    // console.log( e.target.value)
    onSearch(e.target.value)
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={handleSearch}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
