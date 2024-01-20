import {createContext, useState} from "react";
import ToDo from "./Components/ToDo";
import LoginScreen from "./Components/LogInScreen";

export const Auth = createContext("");
export const BackendServer = createContext("");

const App = () => {
  console.log("Cookie: ", document.cookie.match(new RegExp("(^| )token=([^;]+)")));
  const cookie = document.cookie.match(new RegExp("(^| )token=([^;]+)"));
  const [token, setToken] = useState(cookie ? cookie[2] : "");

  return (
    <BackendServer.Provider value={"http://localhost:5128"}>
      <Auth.Provider value={token}>
        {token ? <ToDo /> : <LoginScreen loginFunc={setToken} />}
      </Auth.Provider>
    </BackendServer.Provider>
  );
};

export default App;
