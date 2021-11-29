import CreateForm from "./CreateForm";
import FormResponses from "./FormResponses";
import FormOptions from "../../components/FormOptions";
import NotFound from "../../components/NotFound";
import { Route, Switch } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux"
import { getFormInfo } from "../../redux/formSlice"
import receiveFetch from "../../utils/receiveFetch"

const FormMain = () => {

    const { id } = useParams()

	const form_id = id

	const dispatch = useDispatch()

	useEffect(() => dispatch(getFormInfo({ form_id })), [])

	const [ answers, setAnswers ] = useState();

    useEffect(() => {
        async function fetchData() {
            const result = await receiveFetch("/api/get_responses", "POST", { form_id })
			setAnswers(result)
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
					<FormResponses answers={answers} setAnswers={setAnswers} form_id={form_id} />
				</Route>
  	  		  	<Route>
					<NotFound />
				</Route>
  	  		</Switch>
        </main>
  	);
};

export default FormMain;
