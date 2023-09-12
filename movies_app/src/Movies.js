import React, { Fragment } from "react";
import { useGlobalContext } from "./context";
import { NavLink } from "react-router-dom";
import "./Movies.css";
const Movies = () => {
  const movies = useGlobalContext();

  const moveToMoviesDetails = (imdbID) => {
    movies.setimdbID(imdbID);
  }

  return (
    <Fragment>
      {movies.isLoading && <p className="movies-div">Loading...</p>}
      {movies.error.response ? (
        <p className="movies-div">{movies.error.error}</p>
      ) : (
        <section className="parent-box">
          {movies.movies.map((movie) => {
            const { Title, Poster, imdbID } = movie;
            return (
              <NavLink to={`movie/${imdbID}`} key={imdbID} onClick={() => moveToMoviesDetails(imdbID)}>
                <div className="card-info">
                  <h2>
                    {Title.length > 25
                      ? `${Title.substring(0, 25)}...`
                      : `${Title}`}
                  </h2>
                  <div className="image-card">
                    <img src={Poster} alt={imdbID} />
                  </div>
                </div>
              </NavLink>
            );
          })}
        </section>
      )}
    </Fragment>
  );
};

export default Movies;
