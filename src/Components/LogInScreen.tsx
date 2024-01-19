import "/src/style/index.sass";
import vkLogo from "/src/assets/vk-48.svg"; // неофицальновое
import googleLogo from "/src/assets/google-48.svg"; // неофицальновое
import {MouseEventHandler, useContext, useEffect, useState} from "react";
import {BackendServer} from "../App";
import AuthGetRequests from "../requests/Auth";
import LoginButton from "./LoginButton";

// https://id.vk.com/about/business/go/docs/ru/vkid/archive/1.60/vk-id/guidelines/design-rules

const LoginScreen = (props: LoginScreenProps) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>();
  const [data, setData] = useState<string[]>();
  const url = useContext(BackendServer);

  useEffect(() => {
    console.log("GetAuth");
    AuthGetRequests(
      url,
      (loading) => console.log(loading),
      (error) => console.log(error),
      (data) => setData(data)
    );
    if (error) console.log("Error: ", error);
  }, []);

  const HandleLogin = (link: string) => {
    // window.location.href = link;
    window.location.assign(link);
    props.loginFunc(true);
  };

  return (
    <div className="login screen">
      {data?.map((link) => (
        <LoginButton
          handleLogin={HandleLogin}
          text="Войти через VK ID"
          image={vkLogo}
          link={link}
          class={new URL(link).searchParams.get("state")!}
        />
      ))}
      {/* <button className="vk" onClick={HandleLogin}>
        <img src={vkLogo} className="edge" />
        <span className="text">Войти через VK ID</span>
      </button>
      <button className="github" onClick={HandleLogin}>
        <img src={vkLogo} className="edge" />
        <span className="text">Войти с GitHub</span>
      </button>
      <button className="google" onClick={HandleLogin}>
        <img src={googleLogo} className="edge" />
        <span className="text">Войти с Google</span>
      </button> */}
    </div>
  );
};

type LoginScreenProps = {
  loginFunc: any;
};

export default LoginScreen;
