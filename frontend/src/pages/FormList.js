import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useFetchGet from "../hooks/useFetchGet";
import styled from "styled-components";

const FormSquare = styled.div`
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
        //fetch
        //get form id from database send to context
        //prop to createForm
        //update form
        //link to create_form
    }

    return (
        <div>
            <FormSquare onClick={createForm}>
                <Link to="/create_form">Create Form</Link>
            </FormSquare>

            {forms.length && forms.map(form => {
                return (
                    <FormSquare>
                        {form.title}
                    </FormSquare>
                )
            })
            }
        </div>
    )
};

export default FormList;
