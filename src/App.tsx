import {createContext, useState} from "react";
import ToDo from "./Components/ToDo";
import LoginScreen from "./Components/LogInScreen";

export const Auth = createContext(false);
export const BackendServer = createContext("");


const App = () => {
  console.log(!!new URLSearchParams(window.location.search).get('login'))
  const [token, setToken] = useState(!!new URLSearchParams(window.location.search).get('login'));

  return (
    <BackendServer.Provider value={"http://localhost:5128"}>
      <Auth.Provider value={token}>
        {token ? <ToDo /> : <LoginScreen loginFunc={setToken} />}
      </Auth.Provider>
    </BackendServer.Provider>
  );
};

export default App;
