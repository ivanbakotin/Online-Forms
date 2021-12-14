import FormList from "./FormList";
import FormMain from "./FormMain";
import FilloutForm from "../LoggedOut/FilloutForm";
import InfoPage from "../LoggedOut/InfoPage";
import Aside from "../../components/Aside";
import MobileAside from "../../components/MobileAside";
import NotFound from "../../components/NotFound";
import { Route, Switch } from "react-router-dom";

const LoggedIn = () => {
  	return (     
  	  	<main className="logged-in-main">
  	  	    <Aside />
			<MobileAside />
  	  	    <Switch>
  	  	      	<Route exact path="/"><FormList /></Route>
  	  	    	<Route path="/create_form/:id"><FormMain /></Route>
				<Route path="/fillout_form/:id"><FilloutForm /></Route>
              	<Route path="/infopage"><InfoPage /></Route>
  	  	      	<Route><NotFound /></Route>
  	  	    </Switch>
  	  	</main>
  	);
};

export default LoggedIn;
