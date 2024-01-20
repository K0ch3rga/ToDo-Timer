import Todo from "../dataTypes/Todo";

export const TodoGetAll = (
  serverUrl: string,
  token: string,
  setLoading: (loading: boolean) => void,
  setError: (error: string) => void,
  setData: (data: Todo[]) => void
) => {
  console.log();
  setLoading(true);
  fetch(serverUrl + "/api/tasks", {
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

export const TodoPost = (
  serverUrl: string,
  token: string,
  setLoading: (loading: boolean) => void,
  setError: (error: string) => void,
  data: Todo
) => {
  setLoading(true);
  fetch(serverUrl + "/api/tasks/", {
    method: "POST",
    mode: "cors",
    headers: {
      Authorization: "bearer " + token,
    },
    body: JSON.stringify(data),
  })
    .catch((e) => setError(e))
    .finally(() => setLoading(false));
};

export const TodoPatch = (
  serverUrl: string,
  token: string,
  setLoading: (loading: boolean) => void,
  setError: (error: string) => void,
  data: Todo
) => {
  setLoading(true);
  fetch(serverUrl + "/api/tasks/" + data.id + "/do", {
    method: "PATCH",
    headers: {
      Authorization: "bearer " + token,
    },
    body: JSON.stringify(data),
  })
    .catch((e) => setError(e))
    .finally(() => setLoading(false));
};

export const TodoDelete = (
  serverUrl: string,
  token: string,
  setLoading: (loading: boolean) => void,
  setError: (error: string) => void,
  data: Todo
) => {
  setLoading(false);
  fetch(serverUrl + "/api/tasks/" + data.id, {
    method: "DELETE",
    headers: {
      Authorization: "bearer " + token,
    },
  })
    .catch((e) => setError(e))
    .finally(() => setLoading(false));
};

export const TodoGet = (
  serverUrl: string,
  token: string,
  id: string,
  setLoading: (loading: boolean) => void,
  setError: (error: string) => void,
  setData: (data: any[]) => void
) => {
  console.log();
  setLoading(true);
  fetch(serverUrl + "/api/tasks/" + id, {
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

// export const TodoGetDate
// export const TodoGetUncommpleted