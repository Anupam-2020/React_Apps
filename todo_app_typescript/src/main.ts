type Todo = {
  title: string,
  isCompleted: boolean,
  readonly _id: string
}

const todos: Todo[] = [];

const todoContainer: HTMLDivElement = document.querySelector(".todoContainer") as HTMLDivElement;

const todoInput: HTMLInputElement = document.getElementsByName("task")[0] as HTMLInputElement;

const myForm: HTMLFormElement = document.getElementById("form") as HTMLFormElement;

myForm.onsubmit = (e: SubmitEvent) => {
  e.preventDefault();

  const todo: Todo = {
    title: todoInput.value,
    isCompleted: false,
    _id: String(Math.random()*1000)
  }

  todos.push(todo);
  todoInput.value = "";
  renderTodo(todos);
  console.log(todos);
};

function generateTodoItem(todo: Todo) {

  // Creating a parent div which holds all the other elements.
  const todoDiv: HTMLDivElement = document.createElement("div");
  todoDiv.className = "todoDiv";

  // Creating p-tag for title
  const todoPara: HTMLParagraphElement = document.createElement("p");
  todoPara.textContent = todo.title

  // Creating a checkbox
  const checkbox: HTMLInputElement = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.className = "isCompleted";
  checkbox.checked = todo.isCompleted;
  checkbox.onchange = () => {
    todoPara.className = checkbox.checked ? "textCut" : ""
    todo.isCompleted = checkbox.checked
  }

  todoPara.className = checkbox.checked ? "textCut" : ""

  // Creating div containing p and checkbox
  const innerDiv: HTMLDivElement = document.createElement("div");
  innerDiv.className = "innerDiv";

  innerDiv.append(checkbox, todoPara);

  // Creating delete button
  const deleteBtn: HTMLButtonElement = document.createElement("button");
  deleteBtn.innerText = "X";
  deleteBtn.className = "deleteBtn";
  deleteBtn.onclick = (): void => {
    const idx: number = todos.findIndex((tod: Todo) => tod._id === todo._id);
    todos.splice(idx, 1);
    renderTodo(todos);
  }

  // Appending all tags to div.
  todoDiv.append(innerDiv, deleteBtn);
  todoContainer.append(todoDiv);
}

function renderTodo(todos: Todo[]) {
  todoContainer.innerText = "";
  todos.map((todo: Todo) => {
    generateTodoItem(todo)
  })
}
