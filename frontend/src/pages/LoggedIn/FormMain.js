import CreateForm from "./CreateForm";
import FormResponses from "./FormResponses";
import FormOptions from "../../components/FormOptions";
import NotFound from "../../components/NotFound";
import { Route, Switch } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import receiveFetch from "../../utils/receiveFetch";
import { useDispatch } from "react-redux"
import { getFormInfo } from "../../redux/formSlice"

const FormMain = () => {

    const { id } = useParams()

	const form_id = id

	const dispatch = useDispatch()

	useEffect(() => dispatch(getFormInfo({ form_id })), [])

    useEffect(() => {
        async function fetchData() {
            const form_result = await receiveFetch("/api/get_form_responses", "POST", { form_id })
	}

        fetchData()
    }, [])

  	return (    
        <main>
        	<FormOptions form_id={form_id} />  

  	  		<Switch>
  	  			<Route exact path="/create_form/:id">
					<CreateForm form_id={form_id} />
				</Route>
				<Route exact path="/create_form/:id/response_form">
					<FormResponses form_id={form_id} />
				</Route>
  	  		  	<Route>
					<NotFound />
				</Route>
  	  		</Switch>
        </main>
  	);
};

export default FormMain;
