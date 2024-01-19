import {useContext, useEffect, useState} from "react";
import {BackendServer} from "../App";
import {TodoGetAll} from "../requests/Todo";
import List from "./List";
import Calendar from "./Calendar";
import Todo from "../dataTypes/Todo";

const ToDo = () => {
  const url = useContext(BackendServer);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [data, setData] = useState<Todo[]>();

  useEffect(() => {
    TodoGetAll(
      url,
      (loading: boolean) => setLoading(loading),
      (error: string) => setError(error),
      (data: Todo[]) => setData(data)
    );
  }, []);

  return (
    <div className="main">
      <Calendar />
      <List />
    </div>
  );
};

export default ToDo;
