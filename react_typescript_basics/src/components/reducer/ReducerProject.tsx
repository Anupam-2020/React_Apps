import { useReducer } from "react";
import { reducer, initialState } from "./Reducer";

const ReducerProject = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const increment = (): void => {
    dispatch({
      type: "increment",
      payload: 3,
    });
  };

  const decrement = (): void => {
    dispatch({
      type: "decrement",
      payload: 3,
    });
  };

  return (
    <div>
      <h2>Increment/Decrement</h2>
      <h2>{state.count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};
export default ReducerProject;
