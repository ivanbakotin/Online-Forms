import { useState } from "react";
import { Link } from "react-router-dom"
import receiveFetch from "../../utils/receiveFetch"

const Register = () => {

  	const [ list, setList ] = useState([])
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
  	  	setregisterInfo(prev => ({ ...prev, [e.target.name]: e.target.value }))
  	}

  	function addToList(e) {
  	  	setList(prev => [...prev, e.target.name])
  	}

  	function removeFromList(e) {
  	  	if (!e.target.value) setList(prev => [...prev].filter(x => x != e.target.name))
  	}

  	return (
    	<form className="auth-form" onSubmit={sendregisterInfo}>
    	  	<h1>Register</h1>
    	  	<div>
    	  	  	<input 
    	  	  	  	autoComplete="off"
    	  	  	  	type="text"
    	  	  	  	onFocus={addToList} 
    	  	  	  	onChange={handleInput}
    	  	  	  	onBlur={removeFromList}
    	  	  	  	name="username" 
    	  	  	  	id="username"
    	  	  	/>
    	  	  	<label className={list.includes("username") ? "auth-label" : null} htmlFor="username">Username:</label>
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
    	  	  	<label className={list.includes("password") ? "auth-label" : null} htmlFor="password">Password:</label>
    	  	</div>
    	  	<div>
    	  	  	<input 
    	  	  	  	type="password"
    	  	  	  	onFocus={addToList} 
    	  	  	  	onChange={handleInput}
    	  	  	  	onBlur={removeFromList}
    	  	  	  	name="confirmpassword" 
    	  	  	  	id="confirmpassword"
    	  	  	/>
    	  	  	<label className={list.includes("confirmpassword") ? "auth-label" : null} htmlFor="confirmpassword">Confirm Password:</label>
    	  	</div>
    	  	<button type="submit">Register</button>
    	  	<p>{errorinfo}</p>
    	  	<Link to="/">Already have an Account? Login!</Link>
    	</form>
  );
};

export default Register;
