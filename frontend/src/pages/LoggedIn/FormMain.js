import CreateForm from "./CreateForm";
import FormResponses from "./FormResponses";
import FormOptions from "../../components/FormOptions";
import NotFound from "../../components/NotFound";
import { Route, Switch } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import receiveFetch from "../../utils/receiveFetch";

const FormMain = () => {

    const { id } = useParams()

	const [ info, setInfo ] = useState() 
    const [ questions, setQuestions ] = useState([])

	useEffect(() => {
        async function getFormInfo() {
            const form = await receiveFetch("/api/get_form_info", "POST", { id })
			setInfo({ form_title: form.form_title, descrip: form.descrip })
    		setQuestions(form.questions)
        }

        getFormInfo(id)
    }, [])

  	return (    
		<>
		{info &&
        <main>
        	<FormOptions id={id} />  
  	  		<Switch>
  	  			<Route exact path="/create_form/:id">
					<CreateForm 
						id={id} 
						info={info} 
						questions={questions}
						setQuestions={setQuestions}
					/>
				</Route>
				<Route exact path="/create_form/:id/response_form"><FormResponses id={id} /></Route>
  	  		  	<Route><NotFound /></Route>
  	  		</Switch>
        </main>
		}
		</>
  	);
};

export default FormMain;
