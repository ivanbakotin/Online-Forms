import { Link } from "react-router-dom";
import { useState } from "react";

const Aside = () => {

    const [ search, setSearch ] = useState("")

    const logOut = () => {
        fetch("/auth/logout")
        localStorage.clear()
        window.location.href="/"
    }

    function searchUsers(e) {

    }

    return (
        <aside>
            <input value={search} type="search" onChange={searchUsers}/>
            <Link>My Profile</Link>
            <Link>Forms</Link>
            <button onClick={logOut}>LogOut</button>
        </aside>
    )
};

export default Aside;
