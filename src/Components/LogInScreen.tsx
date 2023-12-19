import "/src/style/index.sass";
import vkLogo from "/src/assets/vk-48.svg"; // неофицальновое

// https://id.vk.com/about/business/go/docs/ru/vkid/archive/1.60/vk-id/guidelines/design-rules

const LoginScreen = () => {
  const Login = () => {
    console.log("logged");
  };

  return (
    <div className="login screen">
      <button className="vk" onClick={() => Login()}>
        <img src={vkLogo} className="edge" />
        Войти через VK ID
        <div className="edge" />
      </button>
    </div>
  );
};

export default LoginScreen;
