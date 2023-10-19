import { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StateType, actions } from "./redux/counterSlice";

const ReduxCounter = () => {
  const dispatch = useDispatch();
  const selector: number = useSelector((state: StateType) => state.count);
  const [value, setValue] = useState<number>(0);

  return (
    <div>
      <h2>Redux Counter</h2>
      <h2>{selector}</h2>
      <button onClick={() => dispatch(actions.increment(value))}>
        Increment
      </button>
      <button onClick={() => dispatch(actions.decrement(value))}>
        Decrement
      </button>
      <input
        placeholder="enter value"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setValue(Number(e.target.value))
        }
      />
    </div>
  );
};

export default ReduxCounter;
