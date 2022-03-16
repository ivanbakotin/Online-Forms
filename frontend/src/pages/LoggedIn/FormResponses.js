import { NavLink, Switch, Route } from "react-router-dom";
import QuestResponse from "../../components/QuestResponse";
import UserResponse from "../../components/UserResponse";

const FormResponses = ({ answersUser, answersQuest, form_id }) => {
  return (
    <section>
      <div className="nav-links">
        <NavLink
          exact
          activeClassName="selected"
          to={{ pathname: `/create_form/${form_id}/response_form` }}
        >
          Questions
        </NavLink>
        <NavLink
          exact
          activeClassName="selected"
          to={{ pathname: `/create_form/${form_id}/response_form/user` }}
        >
          Individuals
        </NavLink>
      </div>
      <Switch>
        <Route exact path="/create_form/:id/response_form">
          <QuestResponse answersQuest={answersQuest} />
        </Route>
        <Route exact path="/create_form/:id/response_form/user">
          <UserResponse answersUser={answersUser} />
        </Route>
      </Switch>
    </section>
  );
};

export default FormResponses;
