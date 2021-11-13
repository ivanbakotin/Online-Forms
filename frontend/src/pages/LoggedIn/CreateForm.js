import { useState, useEffect } from "react";
import Checkbox from "../../components/createTypes/CheckboxType"
import Paragraph from "../../components/createTypes/ParagraphType"
import Line from "../../components/createTypes/LineType"
import FormHeader from "../../components/FormHeader";
import QuestionOptions from "../../components/QuestionOptions";
import ChooseType from "../../components/ChooseType";
import receiveFetch from "../../utils/receiveFetch"
import sendFetch from "../../utils/sendFetch"
import debounce  from "../../utils/debounce";

const CreateForm = ({ id }) => {

    const [ open, setOpen ] = useState(false)

    const [ info, setInfo ] = useState() 
    const [ questions, setQuestions ] = useState([])

    useEffect(() => {
        async function getFormInfo() {
            const form_info = await receiveFetch("/api/get_form_info", "POST", { id })
            setInfo({ form_title: form_info.form_title, descrip: form_info.descrip })
            setQuestions(form_info.questions)
        }

        getFormInfo(id)
    }, [])
    
    const openTypes = () =>setOpen(!open)

    const mainForm = debounce(() => saveFormMain());
    const questForm = debounce(() => saveFormQuestions());
  
    const saveFormQuestions = () => sendFetch("/api/update_form_questions", "POST", { questions, id }); 
    const saveFormMain = () => sendFetch("/api/update_form_main", "POST", { info, id })

    const components = {
        Paragraph,
        Checkbox,
        Line,
    }
    
    return (
        <section className="create-form">

            <FormHeader value={info} saveFormMain={mainForm} />

            <article>
            {questions.map(quest => {

                    const SpecificType = components[quest.question_type]

                    return ( 
                        <div key={quest.question_id}>
                            <SpecificType 
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
