import React, { useContext } from "react";
import { NewsContext } from "./context";
import "./Pagination.css";

const Pagination = () => {
  const context = useContext(NewsContext);

  const page = context.page;
  const nbPages = context.nbPages;

  const prevPage = () => {
    context.dispatch({
      type: "CHANGE_PAGE",
      payload: {
        page: context.page > 0 ? context.page - 1 : 0,
      },
    });
  };

  const nextPage = () => {
    context.dispatch({
      type: "CHANGE_PAGE",
      payload: {
        page:
          context.page < context.nbPages ? context.page + 1 : context.nbPages,
      },
    });
  };

  return (
    <div className="pagination">
      <button onClick={prevPage}>Prev</button>
      <p>
        {page} of {nbPages}
      </p>
      <button onClick={nextPage}>Next</button>
    </div>
  );
};

export default Pagination;
