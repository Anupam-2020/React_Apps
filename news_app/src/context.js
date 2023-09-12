import { createContext, useReducer, useEffect } from "react";
import { reducer } from "./reducer";

const NewsContext = createContext({
  query: "",
  nbPages: 0,
  page: 0,
  hits: [],
  isLoading: null,
  dispatch: {},
});

let API = "http://hn.algolia.com/api/v1/search?";

const initialState = {
  query: "Intel",
  nbPages: 0,
  page: 0,
  hits: [],
  isLoading: false,
};

const NewsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = async (url) => {
    try {
      dispatch({
        type: "SET_LOADING",
        payload: {
          isLoading: true,
        },
      });

      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      // console.log(state.hits);

      dispatch({
        type: "GET_STORIES",
        payload: {
          hits: data.hits,
          nbPages: data.nbPages,
        },
      });

      dispatch({
        type:"SET_LOADING",
        payload: {
          isLoading: false
        }
      })
    } catch (error) {}
  };

  useEffect(() => {
    const interval = setTimeout(() => {
      fetchData(`${API}query=${state.query}&page=${state.page}`);
    }, 500);

    // clean up.
    return () => {
      clearTimeout(interval);
    };
  }, [state.page, state.query]);

  return (
    <NewsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </NewsContext.Provider>
  );
};

export { NewsContext, NewsProvider };
