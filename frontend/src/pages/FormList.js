import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import useFetchGet from "../hooks/useFetchGet";
import receiveFetch from "../utils/receiveFetch"


const FormList = () => {

    const [ forms, setForms ] = useState([]) 

    const fetchedData = useFetchGet("/api/get_forms")

    useEffect(() => {
        if (fetchedData) setForms(fetchedData)
    }, [fetchedData])

    function createForm() {
        receiveFetch("/api/create_form", "POST", {})
        .then(res => window.location.href = `/create_form/${res}`)
    }

    return (
        <div>
            <div onClick={createForm}>
                Create Form
            </div>

            {forms.length && forms.map(form => {
                return (
                    <Link to={{pathname:`/create_form/${form.id}`}}>
                        {form.form_title}
                    </Link>
                )
            })
            }
        </div>
    )
};

export default FormList;
