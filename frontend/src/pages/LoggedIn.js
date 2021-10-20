import FormList from "./FormList";
import FilloutForm from "./FilloutForm";
import CreateForm from "./CreateForm";
import NotFound from "../components/NotFound";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    min-height: 100vh;
    flex-direction: row;

    @media(max-width: 768px) {
      flex-direction: column;
    }
`;

const LoggedIn = () => {

  const logOut = () => {
      fetch("/auth/logout")
      localStorage.clear()
      window.location.href="/"
  }

  return (     
          <Wrapper>
            	<button onClick={logOut}>LOGOUT</button>
              <Switch>
                <Route exact path="/"><FormList /></Route>
                <Route path="/create_form"><CreateForm /></Route>
                <Route><NotFound /></Route>
              </Switch>
          </Wrapper>
  );
};

export default LoggedIn;
