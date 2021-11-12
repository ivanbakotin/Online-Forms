import CreateForm from "./CreateForm";
import FormResponses from "./FormResponses";
import FormOptions from "../../components/FormOptions";
import NotFound from "../../components/NotFound";
import { Route, Switch } from "react-router-dom";
import { useParams } from "react-router-dom";

const NewForm = () => {

    const { id } = useParams()

  	return (     
        <>
        <FormOptions id={id} />  
  	  	<Switch>
  	  		<Route exact path="/create_form/:id"><CreateForm id={id} /></Route>
			<Route exact path="/create_form/:id/response_form"><FormResponses id={id} /></Route>
  	  	  	<Route><NotFound /></Route>
  	  	</Switch>
        </>
  	);
};

export default NewForm;
