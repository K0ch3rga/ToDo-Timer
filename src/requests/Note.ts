const NoteGetAll = (
  serverUrl: string,
  token: string,
  todoId: string,
  setLoading: (loading: boolean) => void,
  setError: (error: string) => void,
  setData: (data: Note[]) => void
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
