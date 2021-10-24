import { useState, useEffect } from "react";
import useFetchGet from "../hooks/useFetchGet";
import styled from "styled-components";
import receiveFetch from "../utils/receiveFetch"
import { Link } from "react-router-dom";

const FormSquare = styled.div`
    height: 15rem;
    width: 15rem;
    background-color: lightgray;
    margin: 3rem;
`;

const FormLink = styled(Link)`
    height: 15rem;
    width: 15rem;
    background-color: lightgray;
    margin: 3rem;
`;

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
            <FormSquare onClick={createForm}>
                Create Form
            </FormSquare>

            {forms.length && forms.map(form => {
                return (
                    <FormLink to={{pathname:`/create_form/${form.id}`}}>
                        {form.form_title}
                    </FormLink>
                )
            })
            }
        </div>
    )
};

export default FormList;
