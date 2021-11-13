import CreateForm from "./CreateForm";
import FormResponses from "./FormResponses";
import FormOptions from "../../components/FormOptions";
import NotFound from "../../components/NotFound";
import { Route, Switch } from "react-router-dom";
import { useParams } from "react-router-dom";

const FormMain = () => {

    const { id } = useParams()

  	return (     
        <main>
        	<FormOptions id={id} />  
  	  		<Switch>
  	  			<Route exact path="/create_form/:id"><CreateForm id={id} /></Route>
				<Route exact path="/create_form/:id/response_form"><FormResponses id={id} /></Route>
  	  		  	<Route><NotFound /></Route>
  	  		</Switch>
        </main>
  	);
};

export default FormMain;
