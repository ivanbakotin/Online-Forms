import CreateForm from "./CreateForm";
import FormResponses from "./FormResponses";
import FormOptions from "../../components/FormOptions";
import NotFound from "../../components/NotFound";
import { Route, Switch } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import receiveFetch from "../../utils/receiveFetch";
import { useDispatch, useSelector } from "react-redux"
import { getFormInfo } from "../../redux/formSlice"

const FormMain = () => {

    const { id } = useParams()

	const dispatch = useDispatch()

	useEffect(() => dispatch(getFormInfo({ id })), [])

	const [ answers, setAnswers ] = useState([])

    useEffect(() => {
        async function fetchData() {
            const form_result = await receiveFetch("/api/get_form_responses", "POST", { id })
            setAnswers(form_result)
        }

        fetchData()
    }, [])

  	return (    
        <main>
        	<FormOptions id={id} />  

  	  		<Switch>
  	  			<Route exact path="/create_form/:id">
					<CreateForm id={id} />
				</Route>
				<Route exact path="/create_form/:id/response_form">
					<FormResponses id={id} />
				</Route>
  	  		  	<Route>
					<NotFound />
				</Route>
  	  		</Switch>
        </main>
  	);
};

export default FormMain;
