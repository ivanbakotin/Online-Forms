import CheckboxType from "../components/Types/CheckboxType"
import ParagraphType from "../components/Types/ParagraphType"
import LineType from "../components/Types/LineType"
import SelectType from "../components/Types/SelectType";
import FormHeader from "../components/FormHeader";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetchGet from "../hooks/useFetchGet";
import receiveFetch from "../utils/receiveFetch"
import styled from "styled-components";
import { TypeContext } from "../context/TypeContext";

const Wrapper = styled.div`
    font-size: 5rem;
    display: flex;
    flex-direction: column;
    `;

const FormList = () => {

    const { id } = useParams()

    const [ open, setOpen ] = useState()

    const [ info, setInfo ] = useState({
        title: "New Form",
        description: ""
    }) 

    const [ questions, setQuestions ] = useState([
        {
            title: "Question?",
            type: "line",
        },
        {
            title: "Question2?",
            type: "paragraph",
        },
        {
            title: "Question2?",
            type: "checkbox",
            checkbox_list: ["first check"],
        },
    ])

    useEffect(() => {
        async function getFormInfo() {
            const form_info = await receiveFetch("/api/get_form_info", "POST", {id})
            
        }

        getFormInfo(id)
    }, [])

    function addQuestion() {
        console.log(questions)
    }
    
    function changeDescriptionSize() {

    }
 
    return (
        <Wrapper>
            <TypeContext.Provider value={info}>
                <FormHeader />
            </TypeContext.Provider>
            {questions.map(quest => {
                switch (quest.type) {          
                    case "line":
                        return ( 
                            <TypeContext.Provider value={quest}>
                                <LineType />
                            </TypeContext.Provider>
                        )   
                    case "paragraph":
                        return ( 
                            <TypeContext.Provider value={quest}>
                                <ParagraphType />
                            </TypeContext.Provider>
                        )   
                    case "checkbox":
                        return ( 
                            <TypeContext.Provider value={quest}>
                                <CheckboxType />
                            </TypeContext.Provider>
                        ) 
                    case "select":
                        return ( 
                            <TypeContext.Provider value={quest}>
                                <SelectType />
                            </TypeContext.Provider>
                        )                           
                }
            })}
            <div onClick={addQuestion}>Add A Question</div>
        </Wrapper>
    )
};

export default FormList;
