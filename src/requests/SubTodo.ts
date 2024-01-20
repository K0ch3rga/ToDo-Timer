export const SubTodoGetAll = (
  serverUrl: string,
  token: string,
  todoId: string,
  setLoading: (loading: boolean) => void,
  setError: (error: string) => void,
  setData: (data: SubTodo[]) => void
) => {
  setLoading(true);
  fetch(serverUrl + "/api/tasks/" + todoId, {
    method: "GET",
    mode: "cors",
    headers: {
      Authorization: "bearer " + token,
    },
  })
    .then(async (response) => setData(await response.json()))
    .catch((e) => setError(e))
    .finally(() => setLoading(false));
};

export const SubTodoPost = (
  serverUrl: string,
  token: string,
  subTodo: SubTodo,
  setLoading: (loading: boolean) => void,
  setError: (error: string) => void,
  setData: (data: SubTodo[]) => void
) => {
  setLoading(true);
  fetch(serverUrl + "/api/tasks/" + subTodo.todoId, {
    method: "POST",
    mode: "cors",
    headers: {
      Authorization: "bearer " + token,
    },
    body: JSON.stringify(subTodo),
  })
    .then(async (response) => setData(await response.json()))
    .catch((e) => setError(e))
    .finally(() => setLoading(false));
};

export const SubTodoDelete = (
  serverUrl: string,
  token: string,
  subTodo: SubTodo,
  setLoading: (loading: boolean) => void,
  setError: (error: string) => void,
  setData: (data: SubTodo[]) => void
) => {
  setLoading(true);
  fetch(serverUrl + "/api/tasks/" + subTodo.todoId, {
    method: "DELETE",
    mode: "cors",
    headers: {
      Authorization: "bearer " + token,
    },
  })
    .then(async (response) => setData(await response.json()))
    .catch((e) => setError(e))
    .finally(() => setLoading(false));
};
