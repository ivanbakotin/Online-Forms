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

const Wrapper = styled.div`
    font-size: 5rem;
    display: flex;
    flex-direction: column;
    `;

const FormList = () => {

    const { id } = useParams()

    const [ open, setOpen ] = useState()

    const [ info, setInfo ] = useState({
        title: "New Form Title",
        descrip: "Description Form"
    }) 

    const [ questions, setQuestions ] = useState([
        {
            quest_title: "Question1?",
            type: "line",
        },
        {
            quest_title: "Question2?",
            type: "paragraph",
        },
        {
            quest_title: "Question2?",
            type: "checkbox",
            checkbox_list: ["first check"],
        },
    ])

    useEffect(() => {
        async function getFormInfo() {
            const form_info = await receiveFetch("/api/get_form_info", "POST", {id})
            //set in state
        }

        getFormInfo(id)
    }, [])

    function debounce(func, timeout = 500){
        let timer;
        return (...args) => {
          clearTimeout(timer);
          timer = setTimeout(() => { func.apply(this, args); }, timeout);
        };
      }

    function saveFormQuestions(e) {
        console.log("HELLO", e.target)
    }

    const saveFormMain = () => sendFetch("/api/update_form_main", "POST", { info, id })
    
    const mainForm = debounce(() => saveFormMain());

    const questForm = debounce((e) => saveFormQuestions(e));
   
    function addQuestion(e) {
        setQuestions(prev => [ ...prev, { title:"Question", type:e.target.getAttribute("name"), checkbox_list:[] }])
        console.log(questions)
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
        </Wrapper>
    )
};

export default FormList;
