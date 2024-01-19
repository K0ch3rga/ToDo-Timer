import {useReducer, useState} from "react";
import Todo from "../dataTypes/Todo";
import CalendarTodo from "./CalenderTodo";
import CalendarBackground from "./CalenderBackground";

const Calendar: React.FC = () => {
  const todos: Todo[] = [
    {
      title: "Test1",
      description: "",
      startTime: new Date(0),
      endTime: new Date(7200000),
      isComplete: false,
      id: "1",
    },
  ];

  const [date, setDate] = useState(new Date());

  const handleDate = (action: "ADD" | "SUB") => {
    console.log(date.getTime() + 7200000);
    if (action == "ADD") setDate(new Date(date.getTime() + 86400000));
    if (action == "SUB") setDate(new Date(date.getTime() - 86400000));
  };

  return (
    <div className="calendar">
      <div className="header">
        <div onClick={() => handleDate("ADD")}>Вперёд</div>
        <div>{date.toDateString()}</div>
        <div onClick={() => handleDate("SUB")}>Назад</div>
      </div>
      <div className="mainContent">
        <CalendarBackground />
        <div className="todoList">
          {todos.map((todo, index) => (
            <CalendarTodo key={index} {...todo} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
