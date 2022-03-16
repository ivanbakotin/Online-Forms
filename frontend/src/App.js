import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import LoggedIn from "./pages/LoggedIn/LoggedIn";
import LoggedOut from "./pages/LoggedOut/LoggedOut.js";
import Loading from "./components/Loading";
import useFetchGet from "./hooks/useFetchGet.js";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = useFetchGet("/auth/islog");

  useEffect(() => {
    if (fetchData) {
      localStorage.setItem("user", fetchData);
      setIsLoggedIn(true);
      setIsLoading(true);
    }
    if (fetchData != undefined) {
      setIsLoading(true);
    }
  }, [fetchData]);

  return (
    <BrowserRouter>
      {isLoading ? isLoggedIn ? <LoggedIn /> : <LoggedOut /> : <Loading />}
    </BrowserRouter>
  );
};

export default App;
