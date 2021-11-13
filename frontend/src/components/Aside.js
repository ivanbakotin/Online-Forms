import { Link } from "react-router-dom";

const Aside = () => {

    const logOut = () => {
        fetch("/auth/logout")
        localStorage.clear()
        window.location.href="/"
    }

    return (
        <aside>
            <Link to="/">My Forms</Link>
            <button onClick={logOut}>LogOut</button>
        </aside>
    )
};

export default Aside;
