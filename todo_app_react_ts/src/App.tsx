import { ChangeEvent, useState } from "react";
import "./App.css";

interface TodoItemType {
  title: string;
  isCompleted: boolean;
  id: number;
}

function App() {
  const [todo, setTask] = useState<TodoItemType["title"]>("");
  const [todoId, setTodoId] = useState<TodoItemType["id"]>(0);
  const [tasks, setTasks] = useState<TodoItemType[]>([]);
  const [edit, setEdit] = useState<boolean>(false);
  const [completed, setCompleted] =
    useState<TodoItemType["isCompleted"]>(false);

  const inputTaskHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };

  const taskCompletionHandler = (id: TodoItemType["id"], title: TodoItemType["title"]): void => {
    setCompleted((isCompleted: TodoItemType["isCompleted"]) => !isCompleted);
    console.log(tasks);
    const newTodo: TodoItemType = {
      id,
      isCompleted: completed,
      title,
    };

    const currId = tasks.findIndex((task: TodoItemType) => task.id === id);
    tasks[currId] = newTodo;
  };

  const submitHandler = (): void => {
    const newTodo: TodoItemType = {
      title: todo,
      isCompleted: false,
      id: edit ? todoId : Math.random() * 1000,
    };
    if (edit) {
      const id = tasks.findIndex((idx) => idx.id === todoId);
      tasks[id] = newTodo;
    } else {
      newTodo.title ? setTasks((prev) => [...prev, newTodo]) : null;
    }
    setTask("");
    console.log(tasks);
  };

  const handleDelete = (id: number): void => {
    setTasks((prevTasks: TodoItemType[]) => prevTasks.filter((task: TodoItemType) => task.id !== id));
  };

  const handleEdit = (
    id: TodoItemType["id"],
    title: TodoItemType["title"]
  ): void => {
    setEdit(true);
    setTodoId(id);
    setTask(title);
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
      {tasks.map((task: TodoItemType) => {
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