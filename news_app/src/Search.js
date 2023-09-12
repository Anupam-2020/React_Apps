import React, { useContext } from "react";
import { NewsContext } from "./context";
import './Search.css';

const Search = () => {

  const context = useContext(NewsContext);

  const searchNews = (e) => {
    // context.query = query;
    context.dispatch({
      type: "SET_QUERY",
      payload: {
        query: e.target.value
      }
    });
    context.dispatch({
      type: "CHANGE_PAGE",
      payload: {
        page: 0
      }
    })
    console.log(e.target.value);
  };
  return (
    <div className="input">
      <input
        type="text"
        placeholder="search news"
        onChange={searchNews}
        value={context.query}
      />
    </div>
  );
};

export default Search;
