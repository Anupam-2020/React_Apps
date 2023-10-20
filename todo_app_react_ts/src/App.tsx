import { ChangeEvent, useReducer, useState } from "react";
import "./App.css";
import { initialState, reducer } from "./Reducer";

interface TodoItemType {
  title: string;
  isCompleted: boolean;
  id: number;
}


function App() {
  const [todo, setTodo] = useState<TodoItemType["title"]>("");
  const [todoId, setTodoId] = useState<TodoItemType["id"]>(0);
  const [todos, setTodos] = useState<TodoItemType[]>([]);
  const [edit, setEdit] = useState<boolean>(false);
  // const [completed, setCompleted] = useState<TodoItemType["isCompleted"]>(false); // used useReducer hook instead of useState

  const [state, dispatch] = useReducer(reducer, initialState);

  const inputTaskHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    setTodo(event.target.value);
  };

  const taskCompletionHandler = (id: TodoItemType["id"], title: TodoItemType["title"]): void => {
    // setCompleted((isCompleted: TodoItemType["isCompleted"]) => !isCompleted); // used useReducer hook instead of useState
    dispatch({type: "completion"})

    console.log(todos);
    const newTodo: TodoItemType = {
      id,
      isCompleted: state.completed,
      title,
    };
    console.log(state.completed);
    const currId = todos.findIndex((task: TodoItemType) => task.id === id);
    todos[currId] = newTodo;
  };

  const submitHandler = (): void => {
    const newTodo: TodoItemType = {
      title: todo,
      isCompleted: false,
      id: edit ? todoId : Math.random() * 1000,
    };
    if (edit) {
      const id = todos.findIndex((idx) => idx.id === todoId);
      todos[id] = newTodo;
    } else {
      newTodo.title ? setTodos((prev) => [...prev, newTodo]) : null;
    }
    setTodo("");
    console.log(todos);
  };

  const handleDelete = (id: number): void => {
    setTodos((prevtodos: TodoItemType[]) => prevtodos.filter((task: TodoItemType) => task.id !== id));
  };

  const handleEdit = (id: TodoItemType["id"], title: TodoItemType["title"]): void => {
    setEdit(true);
    setTodoId(id);
    setTodo(title);
  };

  return (
    <div>
      <h2>Welcome to TODO</h2>
      <div>
        <input
          onChange={inputTaskHandler}
          type="text"
          placeholder="Enter Todo"
          value={todo}
        />
        <button onClick={submitHandler}>Add</button>
      </div>
      {todos.map((task: TodoItemType) => {
        return (
          <div key={task.id} className="taskDiv">
            <div style={{ display: "flex" }}>
              <input
                type="checkbox"
                checked={task.isCompleted}
                style={{ marginRight: "2rem" }}
                onChange={() =>
                  taskCompletionHandler(task.id, task.title)
                }
              />
              <h4
                style={
                  task.isCompleted ? { textDecoration: "line-through" } : {}
                }
              >
                {task.title}
              </h4>
            </div>
            <div className="buttonDiv">
              <button
                onClick={() => handleEdit(task.id, task.title)}
                className="editButton"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(task.id)}
                className="deleteButton"
              >
                🗑️
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;