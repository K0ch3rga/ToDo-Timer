const AuthGetRequests = async (
  serverUrl: string,
  setLoading: (loading: boolean) => void,
  setError: (error: string) => void,
  setData: (data: string[]) => void
) => {
  setLoading(true);
  fetch(serverUrl + "/OAuth/Bot/get/oauth/requests/")
    .then(async (response) => {
      if (!response.ok) throw new Error("Get auth list response not ok")
        return await response.json();
    })
    .then((r) => {
      setData(r as string[]);
    })
    .catch((e) => {
      setError(e);
    })
    .finally(() => setLoading(false));
};

export default AuthGetRequests;
