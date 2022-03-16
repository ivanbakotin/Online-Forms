import CreateForm from "./CreateForm";
import FormResponses from "./FormResponses";
import FormOptions from "../../components/FormOptions";
import NotFound from "../../components/NotFound";
import { Route, Switch } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getFormInfo } from "../../redux/formSlice";
import receiveFetch from "../../utils/receiveFetch";
import groupArray from "../../utils/groupArray";

const FormMain = () => {
  const { id } = useParams();

  const form_id = id;

  const dispatch = useDispatch();

  useEffect(() => dispatch(getFormInfo({ form_id })), []);

  const [answersUser, setAnswersUser] = useState();
  const [answersQuest, setAnswersQuest] = useState();

  useEffect(() => {
    async function fetchData() {
      const result = await receiveFetch("/api/get_responses", "POST", {
        form_id,
      });
      setAnswersUser(groupArray(result, "index_id"));
      setAnswersQuest(groupArray(result, "question_id"));
    }

    fetchData();
  }, []);

  return (
    <main>
      <FormOptions form_id={form_id} />

      <Switch>
        <Route exact path="/create_form/:id">
          <CreateForm form_id={form_id} />
        </Route>
        <Route path="/create_form/:id/response_form">
          <FormResponses
            answersUser={answersUser}
            answersQuest={answersQuest}
            form_id={form_id}
          />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </main>
  );
};

export default FormMain;
