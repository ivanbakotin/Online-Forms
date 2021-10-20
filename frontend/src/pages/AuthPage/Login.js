import { useState } from "react";
import { Link } from "react-router-dom";
import receiveFetch from "../../utils/receiveFetch"
import { Form, Title, ErrorMessage, Button, Formfield, Label } from "./AuthStyle";

const Login = () => {

  const [ list, setList ] = useState(new Set())
  const [ loginfo, setLoginfo ] = useState({ username:"", password:"" })
  const [ errorinfo, setErrorinfo ] = useState("")

  async function sendLoginfo(e) {
    e.preventDefault()
    const res = await receiveFetch("/auth/login", "POST", loginfo)
    if (res === loginfo.username) {
      localStorage.setItem("user", res)
      window.location.href = "/"
    } else {
      setErrorinfo(res.message);
    }
  }

  function handleInput(e) {
    const { name, value } = e.target
    setLoginfo(prevInfo => ({ ...prevInfo, [name]: value }))
  }

  function addToList(e) {
    setList(prevInfo => new Set(prevInfo.add(e.target.name)))
  }

  function removeFromList(e) {
    if (!e.target.value) setList(prev => new Set([...prev].filter(x => x != e.target.name)))
  }

  return (
    <Form onSubmit={sendLoginfo}>
      <Title>Login</Title>
      <Formfield>
        <input 
          autoComplete="off"
          type="text"
          onChange={handleInput}
          onFocus={addToList} 
          onBlur={removeFromList}
          name="username" 
          id="username"
        />
        <Label htmlFor="username" active={list.has("username")}>Username:</Label>
      </Formfield>
      <Formfield>
        <input 
          type="password"
          onFocus={addToList} 
          onChange={handleInput}
          onBlur={removeFromList}
          name="password" 
          id="password"
        />
        <Label htmlFor="password" active={list.has("password")}>Password:</Label>
      </Formfield>
      <Button value="Login" type="submit" />
      <ErrorMessage>{errorinfo}</ErrorMessage>
      <Link to="/register">Dont have an account? Register!</Link>
    </Form>
  );
};

export default Login;
