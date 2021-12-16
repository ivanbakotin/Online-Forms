import { Link } from "react-router-dom"

const Nav = () => {
    return (
        <nav>
            <div className="div-up"></div>
            <h2>Not a member yet? <Link to="/register">Sign up now!</Link></h2>
        </nav>
    )
};

export default Nav;
