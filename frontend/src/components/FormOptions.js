import { NavLink, useLocation } from "react-router-dom";

const FormOptions = ({ form_id }) => {

    const { pathname } = useLocation();
    
    function getLink() {
        navigator.clipboard.writeText(`${window.location.origin}\\fillout_form\\${form_id}`) 
    }

    function sendToFillout() {
        window.location.href = `${window.location.origin}\\fillout_form\\${form_id}`
    }

    return (
        <nav>
            <div className="nav-options">
                <div className="fas fa-eye" onClick={sendToFillout}></div>
                <div className="fas fa-share-square" onClick={getLink}></div>
            </div>
            <div className="nav-links">        
                <NavLink 
                    exact activeClassName="selected" 
                    to={{pathname:`/create_form/${form_id}`}}>
                        Form
                </NavLink>
                <NavLink 
                    isActive={() => [`/create_form/${form_id}/response_form`, 
                                    `/create_form/${form_id}/response_form/user`].includes(pathname)}
                    to={{pathname:`/create_form/${form_id}/response_form`}}>
                        Responses
                </NavLink>          
            </div>
        </nav>
    )
}

export default FormOptions;
