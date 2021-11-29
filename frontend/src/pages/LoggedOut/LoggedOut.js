import Login from "./Login.js";
import Register from "./Register.js";
import FilloutForm from "./FilloutForm";
import InfoPage from "./InfoPage";
import NotFound from "../../components/NotFound.js";
import { Route, Switch } from "react-router-dom";

const LoggedOut = () => {
    return (
        <>
            <Switch>
              <Route exact path="/"><Login /></Route>
              <Route path="/register"><Register /></Route>
              <Route path="/fillout_form/:id"><FilloutForm /></Route>
              <Route path="/infopage"><InfoPage /></Route>
              <Route><NotFound /></Route>
            </Switch>
        </>
    );
};

export default LoggedOut;
