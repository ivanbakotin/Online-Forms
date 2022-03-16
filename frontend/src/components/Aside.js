import { Link } from "react-router-dom";

const Aside = () => {
  const logOut = () => {
    fetch("/auth/logout");
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <aside>
      <Link to="/">My Forms</Link>
      <div onClick={logOut}>LogOut</div>
    </aside>
  );
};

export default Aside;
