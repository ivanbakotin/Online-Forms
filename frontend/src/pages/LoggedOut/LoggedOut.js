import Login from "./Login.js";
import Register from "./Register.js";
import NotFound from "../../components/NotFound.js";
import { Route, Switch } from "react-router-dom";

const LoggedOut = () => {
    return (
        <main>
            <Switch>
              <Route exact path="/"><Login /></Route>
              <Route path="/register"><Register /></Route>
              <Route><NotFound /></Route>
            </Switch>
        </main>
    );
};

export default LoggedOut;
