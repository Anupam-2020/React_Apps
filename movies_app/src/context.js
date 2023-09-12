import { createContext, useContext, useEffect, useState } from "react";
import { BASE_URL } from "./App-auth";

// const API_KEY = process.env.REACT_APP_API_KEY;

// export const BASE_URL = `https://www.omdbapi.com/?apikey=${API_KEY}&`;

const MovieContext = createContext({
  name: "",
  isLoading: null,
  movies: [],
  error: null,
  setQuery: () => {},
  query: "",
  setimdbID: () => {},
  setIsLoading: () => {},
  setMovies: () => {},
  setError: () => {},
  imdbID: "",
  selectedMovie: {},
});

const MovieProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState({
    response: false,
    error: "",
  });
  const [query, setQuery] = useState("avengers");
  const [imdbID, setimdbID] = useState("");
  const [selectedMovie, setSelectedMovie] = useState({
    Actors: "",
    Country: "",
    Released: "",
    Language: "",
    imdbRating: "",
    Poster: "",
    Title:"",
    Genre: ""
  });

  const getMovies = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      if (data.Response === "True") {
        setMovies(data.Search);
        setIsLoading(false);
        setError({
          response: false,
          error: "",
        });
      } else {
        setError({
          response: data.Response,
          error: data.Error,
        });
      }
    } catch (e) {
      console.log(error.response);
    }
  };

  const getIndividualMovies = async (url) => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setSelectedMovie({
        Actors: data.Actors,
        Country: data.Country,
        Released: data.Released,
        Language: data.Language,
        imdbRating: data.imdbRating,
        Poster: data.Poster,
        Title: data.Title,
        Genre: data.Genre
      });
      setIsLoading(false)
    } catch (error) {}
  };

  useEffect(() => {
    const id = setTimeout(() => {
      getMovies(BASE_URL + "s=" + query);
      getIndividualMovies(BASE_URL + "i=" + imdbID);
    }, 1000);

    // cleanup function.
    return () => {
      clearTimeout(id);
    };
  }, [query, imdbID]);

  return (
    <MovieContext.Provider
      value={{
        isLoading,
        movies,
        error,
        setQuery,
        query,
        setimdbID,
        imdbID,
        selectedMovie,
        setSelectedMovie
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

const useGlobalContext = () => useContext(MovieContext);

export { MovieProvider, MovieContext, useGlobalContext };
