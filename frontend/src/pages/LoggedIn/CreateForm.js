import { useState } from "react";
import FormHeader from "../../components/FormHeader";
import QuestionOptions from "../../components/QuestionOptions";
import AddType from "../../components/AddType";
import sendFetch from "../../utils/sendFetch"
import debounce  from "../../utils/debounce";
import { componentsCreate } from "../../utils/variables";

const CreateForm = ({ id, info, questions, setQuestions }) => {

    const [ open, setOpen ] = useState(false)

    const openTypes = () => setOpen(!open)

    const mainForm = debounce(() => saveFormMain());
    const questForm = debounce(() => saveFormQuestions());
  
    const saveFormQuestions = () => sendFetch("/api/update_form_questions", "POST", { questions, id }); 
    const saveFormMain = () => sendFetch("/api/update_form_main", "POST", { info, id })

    return (
        <section className="create-form">

            <FormHeader value={info} saveFormMain={mainForm} />
            
            {questions.map(quest => {

                    const SpecificType = componentsCreate[quest.question_type]
                    
                    return ( 
                        <div className="question-div" key={quest.question_id}>
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

            <article className="choose-type-main">
                <div onClick={openTypes}>ADD TYPE +</div>
                <AddType 
                    open={open} 
                    setQuestions={setQuestions} 
                    questions={questions}
                />
            </article>
    
        </section>
    )
};

export default CreateForm;
