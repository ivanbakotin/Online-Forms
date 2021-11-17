import { useState } from "react";
import FormHeader from "../../components/FormHeader";
import QuestionOptions from "../../components/QuestionOptions";
import AddType from "../../components/AddType";
import sendFetch from "../../utils/sendFetch"
import debounce  from "../../utils/debounce";
import { componentsCreate } from "../../utils/variables";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

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
            
            <TransitionGroup
                component={null}
            >
            {questions.map(quest => {

                    const SpecificType = componentsCreate[quest.question_type]
                    
                    return ( 
                        <CSSTransition
                            key={quest.question_id}
                            classNames="example"
                            timeout={{ enter: 500, exit: 300 }}
                        >
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
                        </CSSTransition>
                    )        
            })}
            </TransitionGroup>

            <article className="choose-type-main">
                <div className="fas fa-plus-circle" onClick={openTypes}></div>
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
