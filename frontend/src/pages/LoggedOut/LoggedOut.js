import Login from "./Login.js";
import Register from "./Register.js";
import FilloutForm from "./FilloutForm";
import Footer from "../../components/Footer.js";
import Header from "../../components/Nav.js";
import NotFound from "../../components/NotFound.js";
import { Route, Switch } from "react-router-dom";

const LoggedOut = () => {
    return (
        <main className="logged-out-main">
            <Header />
            <Switch>
              <Route exact path="/"><Login /></Route>
              <Route path="/register"><Register /></Route>
              <Route path="/fillout_form/:id"><FilloutForm /></Route>
              <Route><NotFound /></Route>
            </Switch>
            <Footer />
        </main>
    );
};

export default LoggedOut;
