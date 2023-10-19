type StateType = {
  count: number;
};

type ActionType =
  | { type: "increment"; payload: number }
  | { type: "decrement"; payload: number };

export const initialState: StateType = {
  count: 0,
};

export const reducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    default:
      return state;
  }
};
