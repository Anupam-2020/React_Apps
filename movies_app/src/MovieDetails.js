import React from "react";
// import { useParams } from 'react-router-dom';
import { useGlobalContext } from "./context";
import "./MovieDetails.css";
import { NavLink } from "react-router-dom";

const MovieDetails = () => {
  // const {id} = useParams();
  const getContext = useGlobalContext();

  const { Poster, Title, Released, imdbRating, Country, Genre } =
    getContext.selectedMovie;
  const imdbID = getContext.imdbID;

  const setMovieDetailsToNull = () => {
    getContext.setSelectedMovie({
      Actors: "",
    Country: "",
    Released: "",
    Language: "",
    imdbRating: "",
    Poster: "",
    Title:"",
    Genre: ""
    })
  }

  return (
    <>
    {getContext.isLoading ? (<p>Loading...</p>) : (<div className="movie-details">
       <div className="movie">
        <div className="image-part">
          <img src={Poster} alt={imdbID} />
        </div>
        <div className="movie-details-part">
          <h2>{Title}</h2>
          <p>{Released}</p>
          <p>{imdbRating}/10</p>
          <p>{Country}</p>
          <p>{Genre}</p>
          <div className="anchor">
            <NavLink onClick={setMovieDetailsToNull} to="/">Go Back</NavLink>
          </div>
        </div>
      </div>
    </div>)}
    </>
    
  );
};

export default MovieDetails;
