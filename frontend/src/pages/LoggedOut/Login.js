import { useState } from "react";
import { Link } from "react-router-dom";
import receiveFetch from "../../utils/receiveFetch";

const Login = () => {
  const [list, setList] = useState([]);
  const [loginfo, setLoginfo] = useState({ username: "", password: "" });
  const [errorinfo, setErrorinfo] = useState("");

  async function sendLoginfo(e) {
    e.preventDefault();
    const res = await receiveFetch("/auth/login", "POST", loginfo);
    if (res === loginfo.username) {
      localStorage.setItem("user", res);
      window.location.href = "/";
    } else {
      setErrorinfo(res.message);
    }
  }

  function handleInput(e) {
    setLoginfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function addToList(e) {
    setList((prev) => [...prev, e.target.name]);
  }

  function removeFromList(e) {
    if (!e.target.value)
      setList((prev) => [...prev].filter((x) => x != e.target.name));
  }

  return (
    <form className="auth-form" onSubmit={sendLoginfo}>
      <h1>Login</h1>
      <div>
        <input
          autoComplete="off"
          type="text"
          onChange={handleInput}
          onFocus={addToList}
          onBlur={removeFromList}
          name="username"
          id="username"
        />
        <label
          className={list.includes("username") ? "auth-label" : null}
          htmlFor="username"
        >
          Username:
        </label>
      </div>
      <div>
        <input
          type="password"
          onFocus={addToList}
          onChange={handleInput}
          onBlur={removeFromList}
          name="password"
          id="password"
        />
        <label
          className={list.includes("password") ? "auth-label" : null}
          htmlFor="password"
        >
          Password:
        </label>
      </div>
      <button type="submit">Login</button>
      <p>{errorinfo}</p>
      <Link to="/register">Dont have an account? Register!</Link>
    </form>
  );
};

export default Login;
