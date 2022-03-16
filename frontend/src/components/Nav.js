import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <h2>
        Not a member yet? <Link to="/register">Sign up now!</Link>
      </h2>
    </nav>
  );
};

export default Nav;
