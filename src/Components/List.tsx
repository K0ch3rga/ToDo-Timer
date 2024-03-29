import {useContext, useState} from "react";
import Todo from "../dataTypes/Todo";
import {TodoPatch, TodoPost} from "../requests/Todo";
import {Auth, BackendServer} from "../App";

const List = (props: {startTodo: (todo: Todo) => void}) => {
  const [width, setWidth] = useState<number>(300);
  const [todos, setTodos] = useState<Todo[]>([]);
  const url = useContext(BackendServer);
  const token = useContext(Auth);
  let screenWidth = window.innerWidth;

  const handleResize = (e: React.DragEvent<HTMLDivElement>) => {
    // console.log(e);
    // console.log(screenWidth - e.clientX);
    setWidth(screenWidth - e.clientX);
  };

  const handleAdd = () => {
    let todo: Todo = {id: crypto.randomUUID(), title: "Новая задача"};
    TodoPost(
      url,
      token,
      (loading) => console.log("Loading: ", loading),
      (error) => console.log("Error: ", error),
      todo
    );
    setTodos([todo, ...todos]);
  };

  const handleStart = (todo: Todo) => {
    setTodos(todos.filter((t) => t != todo));
  };

  return (
    <div className="list" style={{minWidth: width}}>
      <div className="drag" draggable onDragEnd={handleResize}></div>
      <div className="content">
        <div className="add" onClick={handleAdd}>
          Добавить задание
        </div>
        <div>
          {todos.map((t) => (
            <Item todo={t} startFunc={handleStart} />
          ))}
        </div>
      </div>
    </div>
  );
};

const Item = (props: {todo: Todo; startFunc: (todo: Todo) => void}) => {
  const [redo, setRedo] = useState<boolean>(false);
  const [todo, setTodo] = useState<Todo>(props.todo);
  const id = todo.id;
  const handleRedo = () => setRedo(true);
  const handleSave = () => {
    // TodoPatch()
    setRedo(false);
  };
  const handleStart = () => {
    console.log("started:", props.todo);
    props.startFunc(props.todo);
  };
  return (
    <div className="todo">
      {!redo && <div>{todo.title}</div>}
      {redo && (
        <input
          title="Title"
          placeholder="Название..."
          className="input"
          value={todo.title}
          onChange={(e) => setTodo({...todo, title: e.target.value})}
        />
      )}
      <div className="line" />
      <div className="buttons">
        <div className="begin button" onClick={handleStart}>
          Начать
        </div>
        <div className="splitter" />
        {!redo && (
          <div className="redo button" onClick={handleRedo}>
            Редактировать
          </div>
        )}
        {redo && (
          <div className="redo button" onClick={handleSave}>
            Сохранить
          </div>
        )}
      </div>
    </div>
  );
};

export default List;
