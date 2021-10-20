import { useState } from "react";
import { Link } from "react-router-dom"
import receiveFetch from "../../utils/receiveFetch"
import { Form, Title, ErrorMessage, Button, Formfield, Label } from "./AuthStyle";

const Register = () => {

  const [ list, setList ] = useState(new Set())
  const [ errorinfo, setErrorinfo ] = useState("")
  const [ registerInfo, setregisterInfo ] = useState({
    username: "",
    password: "",
    confirmpassword: "",
  })

  const { password, confirmpassword } = registerInfo

  async function sendregisterInfo(e) {
    e.preventDefault()
    if (password === confirmpassword) {
      const res = await receiveFetch("/auth/register", "POST", registerInfo)
      if (res === true) {
        window.location.href = "/"
      } else {
        setErrorinfo(res.message);
      }
    } else {
        setErrorinfo("Passwords dont match!")
    }
  }

  function handleInput(e) {
    const { name, value } = e.target;
    setregisterInfo(prevInfo => ({ ...prevInfo, [name]: value }))
  }

  function addToList(e) {
    setList(prevInfo => new Set(prevInfo.add(e.target.name)))
  }

  function removeFromList(e) {
    if (!e.target.value) setList(prev => new Set([...prev].filter(x => x != e.target.name)))
  }

  return (
    <Form onSubmit={sendregisterInfo}>
      <Title>Register</Title>
      <Formfield>
        <input 
          autoComplete="off"
          type="text"
          onFocus={addToList} 
          onChange={handleInput}
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
      <Formfield>
        <input 
          type="password"
          onFocus={addToList} 
          onChange={handleInput}
          onBlur={removeFromList}
          name="confirmpassword" 
          id="confirmpassword"
        />
        <Label htmlFor="confirmpassword" active={list.has("confirmpassword")}>Confirm Password:</Label>
      </Formfield>
      <Button value="Register" type="submit" />
      <ErrorMessage>{errorinfo}</ErrorMessage>
      <Link to="/">Already have an Account? Login!</Link>
    </Form>
  );
};

export default Register;
