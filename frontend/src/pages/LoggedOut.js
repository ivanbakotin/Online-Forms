import Login from "./AuthPage/Login.js";
import Register from "./AuthPage/Register.js";
import NotFound from "../components/NotFound.js";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components"

const Wrapper = styled.div`
    min-height: 100vh;
    display: flex;
`;

const LoggedOut = () => {

    return (
        <Wrapper>
            <Switch>
              <Route exact path="/"><Login /></Route>
              <Route path="/register"><Register /></Route>
              <Route><NotFound /></Route>
            </Switch>
        </Wrapper>
    );
};

export default LoggedOut;
