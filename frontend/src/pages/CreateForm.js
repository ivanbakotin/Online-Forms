import CheckboxType from "../components/Types/CheckboxType"
import ParagraphType from "../components/Types/ParagraphType"
import LineType from "../components/Types/LineType"
import SelectType from "../components/Types/SelectType";
import FormHeader from "../components/FormHeader";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetchGet from "../hooks/useFetchGet";
import receiveFetch from "../utils/receiveFetch"
import sendFetch from "../utils/sendFetch"
import styled from "styled-components";
import { TypeContext } from "../context/TypeContext";
import { debounce } from "../utils/debounce";

const Wrapper = styled.div`
    font-size: 5rem;
    display: flex;
    flex-direction: column;
    `;

const FormList = () => {

    const { id } = useParams()

    const [ open, setOpen ] = useState()

    const [ info, setInfo ] = useState({
        form_title: "New Form Title",
        descrip: "Description Form"
    }) 

    const [ questions, setQuestions ] = useState([])

    useEffect(() => {
        async function getFormInfo() {
            const form_info = await receiveFetch("/api/get_form_info", "POST", {id})
            console.log(form_info)
            setInfo({form_title: form_info.form_title, descrip: form_info.descrip})
            console.log(info)
        }

        getFormInfo(id)
    }, [])

    const mainForm = debounce(e => saveFormMain(e));
    
    const questForm = debounce(e => saveFormQuestions(e));
    
    const saveFormQuestions = e => sendFetch("/api/update_form_questions", "POST", { questions, id })

    const saveFormMain = e => sendFetch("/api/update_form_main", "POST", { info, id })
      
    function addQuestion(e) {
        let index;
        if (questions[questions.length - 1]?.id != undefined) index = questions[questions.length - 1].id + 1
        else index = 0
        setQuestions(prev => [ ...prev, { id: index, quest_title:"Question?", type:e.target.getAttribute("name"), checkbox_list:[{ id: 1, qq_title: "Option"}] }])
    }
 
    return (
        <Wrapper>
            <TypeContext.Provider value={info}>
                <FormHeader saveFormMain={mainForm}/>
            </TypeContext.Provider>
            {questions.map(quest => {
                switch (quest.type) {          
                    case "line":
                        return ( 
                            <TypeContext.Provider value={quest}>
                                <LineType saveFormQuestions={questForm}/>
                            </TypeContext.Provider>
                        )   
                    case "paragraph":
                        return ( 
                            <TypeContext.Provider value={quest}>
                                <ParagraphType saveFormQuestions={questForm}/>
                            </TypeContext.Provider>
                        )   
                    case "checkbox":
                        return ( 
                            <TypeContext.Provider value={quest}>
                                <CheckboxType saveFormQuestions={questForm}/>
                            </TypeContext.Provider>
                        ) 
                    case "select":
                        return ( 
                            <TypeContext.Provider value={quest}>
                                <SelectType saveFormQuestions={questForm}/>
                            </TypeContext.Provider>
                        )                           
                }
            })}
            <div name="checkbox" onClick={addQuestion}>Add A Checkbox</div>
            <div name="paragraph" onClick={addQuestion}>Add A Paragraph</div>
            <div>Save Form</div>
        </Wrapper>
    )
};

export default FormList;
