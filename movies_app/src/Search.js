import React from "react";
import { useGlobalContext } from "./context";
import '../src/Search.css';

const Search = () => {
  const getMovie = useGlobalContext();

  const searchMovies = (e) => {
    // console.log(e.target.value);
    getMovie.setQuery(e.target.value);
  };

  return (
    <div className="search-parent">
      <div>Search yout favourite movie</div>
      <form action="#" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Search movies"
          onChange={searchMovies}
          value={getMovie.query}
          className="search-bar"
        />
      </form>
    </div>
  );
};

export default Search;
