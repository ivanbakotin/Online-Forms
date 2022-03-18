import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav class="landing-background">
      <h1>Create your forms quick and easy!</h1>
      <h2>
        Not a member yet? <Link to="/register">Sign up now!</Link>
      </h2>
    </nav>
  );
};

export default Nav;
