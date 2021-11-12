import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CheckboxType from "../../components/createTypes/CheckboxType"
import ParagraphType from "../../components/createTypes/ParagraphType"
import LineType from "../../components/createTypes/LineType"
import SelectType from "../../components/createTypes/SelectType";
import FormHeader from "../../components/FormHeader";
import QuestionOptions from "../../components/QuestionOptions";
import ChooseType from "../../components/ChooseType";
import FormOptions from "../../components/FormOptions";
import receiveFetch from "../../utils/receiveFetch"
import sendFetch from "../../utils/sendFetch"
import debounce  from "../../utils/debounce";

const CreateForm = () => {

    const { id } = useParams()

    const [ open, setOpen ] = useState(false)

    const [ info, setInfo ] = useState() 
    const [ questions, setQuestions ] = useState([])

    useEffect(() => {
        async function getFormInfo() {
            const form_info = await receiveFetch("/api/get_form_info", "POST", { id })
            setInfo({ form_title: form_info.form_title, descrip: form_info.descrip, category: form_info.category })
            setQuestions(form_info.questions)
        }

        getFormInfo(id)
    }, [])
    
    const openTypes = () =>setOpen(!open)

    const mainForm = debounce(() => saveFormMain());
    const questForm = debounce(() => saveFormQuestions());
  
    const saveFormQuestions = () => sendFetch("/api/update_form_questions", "POST", { questions, id }); 
    const saveFormMain = () => sendFetch("/api/update_form_main", "POST", { info, id })

    return (
        <section className="create-form">

            <FormOptions />
            <FormHeader value={info} saveFormMain={mainForm} />

            <article>
            {questions.map(quest => {
                switch (quest.question_type) {          
                    case "line":
                        return ( 
                            <div key={quest.question_id}>
                                <LineType 
                                    value={quest} 
                                    saveFormQuestions={questForm}
                                />
                                <QuestionOptions 
                                    id={id} 
                                    value={quest} 
                                    setQuestions={setQuestions} 
                                    questions={questions}
                                />
                            </div>
                        )  
                    case "paragraph":
                        return ( 
                            <div key={quest.question_id}>
                                <ParagraphType 
                                    value={quest} 
                                    saveFormQuestions={questForm}
                                />
                                <QuestionOptions 
                                    id={id} 
                                    value={quest} 
                                    setQuestions={setQuestions} 
                                    questions={questions}
                                />
                            </div>
                        )   
                    case "checkbox":
                        return ( 
                            <div key={quest.question_id}>
                                <CheckboxType 
                                    value={quest} 
                                    saveFormQuestions={questForm}
                                />
                                <QuestionOptions 
                                    id={id} 
                                    value={quest} 
                                    setQuestions={setQuestions} 
                                    questions={questions}
                                
                                />
                            </div>
                        ) 
                    case "select":
                        return ( 
                            <div key={quest.question_id}>
                                <SelectType 
                                    value={quest} 
                                    saveFormQuestions={questForm}
                                />
                                <QuestionOptions 
                                    id={id} 
                                    value={quest} 
                                    setQuestions={setQuestions} 
                                    questions={questions}
                                />
                            </div>
                        ) 
                    }                   
            })}
            </article>

            <article className="choose-type-main">
                <button onClick={openTypes}>ADD TYPE +</button>
                <ChooseType 
                    open={open} 
                    setQuestions={setQuestions} 
                    questions={questions}
                />
            </article>
            
        </section>
    )
};

export default CreateForm;

