import Todo from "../dataTypes/Todo";

export const TodoGetAll = (
  serverUrl: string,
  setLoading: (loading: boolean) => void,
  setError: (error: string) => void,
  setData: (data: any[]) => void
) => {
  console.log();
  setLoading(true);
  fetch(serverUrl + "/api/tasks", {
    method: "GET",
    mode: "cors",
  })
    .then(async (response) => setData(await response.json()))
    .catch((e) => setError(e))
    .finally(() => setLoading(false));
};

export const TodoPost = (
  serverUrl: string,
  setLoading: (loading: boolean) => void,
  setError: (error: string) => void,
  data: Todo
) => {
  setLoading(true);
  fetch(serverUrl + "/api/tasks/", {
    method: "POST",
    mode: "cors",
    body: JSON.stringify(data),
  })
    .catch((e) => setError(e))
    .finally(() => setLoading(false));
};

export const TodoPatch = (
  serverUrl: string,
  setLoading: (loading: boolean) => void,
  setError: (error: string) => void,
  data: Todo
) => {
  setLoading(true);
  fetch(serverUrl + "/api/tasks/" + data.id + "/do", {method: "PATCH", body: JSON.stringify(data)})
    .catch((e) => setError(e))
    .finally(() => setLoading(false));
};

export const TodoDelete = (
  serverUrl: string,
  setLoading: (loading: boolean) => void,
  setError: (error: string) => void,
  data: Todo
) => {
  setLoading(false);
  fetch(serverUrl + "/api/tasks/" + data.id, {method: "DELETE"})
    .catch((e) => setError(e))
    .finally(() => setLoading(false));
};
