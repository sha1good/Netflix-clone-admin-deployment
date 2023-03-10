import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { login } from "../../context/authContext/apiCalls";
import { AuthContext } from "../../context/authContext/AuthContext";
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isFetching, dispatch, error } = useContext(AuthContext);
  const history = useHistory();

  const handleLogin = (event) => {
    event.preventDefault();
    const user = { email, password };
    login(user, dispatch);
    history.push("/");
  };
  return (
    <div className="login">
      <form className="loginForm">
        <input
          type="text"
          placeholder="email"
          className="loginInput"
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          className="loginInput"
          onChange={(event) => setPassword(event.target.value)}
        />
        <button
          className="loginButton"
          onClick={handleLogin}
          disabled={isFetching}
        >
          Login
        </button>
        {error && <span className="loginSpan">You can only login as an Admin!</span>}
      </form>
    </div>
  );
};

export default Login;
