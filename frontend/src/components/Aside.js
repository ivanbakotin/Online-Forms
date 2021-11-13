import { Link } from "react-router-dom";
import { useState } from "react";

const Aside = () => {

    const logOut = () => {
        fetch("/auth/logout")
        localStorage.clear()
        window.location.href="/"
    }

    return (
        <aside>

            <button onClick={logOut}>LogOut</button>
        </aside>
    )
};

export default Aside;
