import {useContext, useEffect, useState} from "react";
import {Auth, BackendServer} from "../App";
import {TodoGetAll} from "../requests/Todo";
import moment from "moment";
import {Calendar, CalendarProps, Event, momentLocalizer} from "react-big-calendar";
import "react-big-calendar/lib/sass/styles.scss";
import List from "./List";
// import Calendar from "./Calendar";
import Todo from "../dataTypes/Todo";

const ToDo = () => {
  const url = useContext(BackendServer);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [data, setData] = useState<Todo[]>([]);
  const [events, setEvents] = useState<Event[]>([]);
  const token = useContext(Auth);

  useEffect(() => {
    TodoGetAll(
      url,
      token,
      (loading: boolean) => setLoading(loading),
      (error: string) => setError(error),
      (data: Todo[]) => setData(data)
    );
    setEvents(transform(data));
  }, []);

  const transform = (todos: Todo[]): Event[] => {
    return todos.map<Event>((t) => ({title: t.title, start: t.startTime, end: t.endTime}));
  };

  const startTodo = (todo: Todo) => {
    data.push({...todo, startTime: new Date()});
    setEvents(transform(data));
  };

  return (
    <div className="main">
      <Calendar
        localizer={momentLocalizer(moment)}
        defaultDate={new Date()}
        defaultView="day"
        events={events}
      />
      {/* <Calendar /> */}
      <List startTodo={startTodo} />
    </div>
  );
};

export default ToDo;
