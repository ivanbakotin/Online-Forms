import { NavLink } from "react-router-dom";

const FormOptions = ({ form_id }) => {
    
    function getLink() {
        //navigator.clipboard.writeText
    }

    return (
        <nav>
            <div className="nav-options">
                <div className="fas fa-eye" onClick={getLink}></div>
                <div className="fas fa-share-square" onClick={getLink}></div>
            </div>
            <div className="nav-links">
                <span>
                    <NavLink 
                        exact activeClassName="selected" 
                        to={{pathname:`/create_form/${form_id}`}}>
                            Form
                    </NavLink>
                    <NavLink 
                        exact activeClassName="selected" 
                        to={{pathname:`/create_form/${form_id}/response_form`}}>
                            Responses
                    </NavLink>
                </span>
            </div>
        </nav>
    )
}

export default FormOptions;
