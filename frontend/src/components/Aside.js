const Aside = () => {

    const logOut = () => {
        fetch("/auth/logout")
        localStorage.clear()
        window.location.href="/"
    }

    return (
        <aside>
            <button onClick={logOut}>LOGOUT</button>
        </aside>
    )
};

export default Aside;
