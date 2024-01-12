import {createContext, useState} from "react";
import ToDo from "./ToDo";
import LoginScreen from "./Components/LogInScreen";

export const Auth = createContext(false);
export const BackendServer = createContext("");


const App = () => {
  const [token, setToken] = useState(false);

  return (
    <BackendServer.Provider value={"http://localhost:5128"}>
      <Auth.Provider value={token}>
        {token ? <ToDo /> : <LoginScreen loginFunc={setToken} />}
      </Auth.Provider>
    </BackendServer.Provider>
  );
};

export default App;
