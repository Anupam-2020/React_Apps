interface StateType {
  completed: boolean,
}

type ActionType = {type: "completion", payload?: boolean};


export const reducer = (state: StateType, action: ActionType): StateType => {
  switch(action.type) {
    case "completion": return {completed: !state.completed}
    default: return state;
  }
}

export const initialState: StateType = {
  completed: false
}