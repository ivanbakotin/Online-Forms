import FormList from "./FormList";
import CreateForm from "./CreateForm";
import Aside from "../../components/Aside";
import NotFound from "../../components/NotFound";
import { Route, Switch } from "react-router-dom";

const LoggedIn = () => {
  return (     
          <main>
              <Aside />
              <Switch>
                <Route exact path="/"><FormList /></Route>
                <Route path="/create_form/:id"><CreateForm /></Route>
                <Route><NotFound /></Route>
              </Switch>
          </main>
  );
};

export default LoggedIn;