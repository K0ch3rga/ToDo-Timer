import "/src/style/index.sass";
import vkLogo from "/src/assets/vk-48.svg"; // неофицальновое
import googleLogo from "/src/assets/google-48.svg"; // неофицальновое
import {MouseEventHandler, useContext, useEffect} from "react";
import {BackendServer} from "../App";

// https://id.vk.com/about/business/go/docs/ru/vkid/archive/1.60/vk-id/guidelines/design-rules

const LoginScreen = (props: LoginScreenProps) => {
  const url = useContext(BackendServer);
  let redirect: Response;
  useEffect(() => {
    fetch(url + "/OAuth/Bot/get/oauth/requests")
      .then((data) => (redirect = data))
      .catch((e) => console.log(e));
    console.log(redirect);
  });
  const HandleLogin: MouseEventHandler<HTMLButtonElement> = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e);
    props.loginFunc(true);
  };

  return (
    <div className="login screen">
      <button className="vk" onClick={HandleLogin}>
        <img src={vkLogo} className="edge" />
        <span className="text">Войти через VK ID</span>
      </button>
      <button className="github" onClick={HandleLogin}>
        <img src={vkLogo} className="edge" />
        <span className="text">Войти с GitHub</span>
      </button>
      <button className="google" onClick={HandleLogin}>
        <img src={googleLogo} className="edge" />
        <span>Войти с Google</span>
      </button>
    </div>
  );
};

type LoginScreenProps = {
  loginFunc: any;
};

export default LoginScreen;
