import Todo from "../dataTypes/Todo";

const CalendarTodo: React.FC<Todo> = (props) => {
  return <div className="todoItem">{props.title}</div>;
};

export default CalendarTodo;
