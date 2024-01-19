const LoginButton = (props: LoginButtonProps) => {
  return (
    <button className={props.class} onClick={() => props.handleLogin(props.link)}>
      <img src={props.image} className="edge" />
      <span className="text">{props.text}</span>
    </button>
  );
};

export type LoginButtonProps = {
  image: string;
  link: string;
  text: string;
  class: string;
  handleLogin: (link: string) => void;
};

export default LoginButton;
