import { NavLink } from "react-router-dom";

const FormOptions = ({ id }) => {
    
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
                <NavLink exact activeClassName="selected" to={{pathname:`/create_form/${id}`}}>Form</NavLink>
                <NavLink exact activeClassName="selected" to={{pathname:`/create_form/${id}/response_form`}}>Responses</NavLink>
            </div>
        </nav>
    )
}

export default FormOptions;
