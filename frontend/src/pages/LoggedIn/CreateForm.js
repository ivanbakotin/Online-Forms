import { useState } from "react";
import FormHeader from "../../components/FormHeader";
import QuestionOptions from "../../components/QuestionOptions";
import AddType from "../../components/AddType";
import sendFetch from "../../utils/sendFetch"
import debounce  from "../../utils/debounce";
import { componentsCreate } from "../../utils/variables";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useSelector } from "react-redux"

const CreateForm = ({ id }) => {

    const questions = useSelector(state => state.form.questions)

    const [ open, setOpen ] = useState(false)

    const openTypes = () => setOpen(!open)

    const questForm = debounce(() => saveFormQuestions());

    console.log(questions)
  
    const saveFormQuestions = () => sendFetch("/api/update_form_questions", "POST", { questions, id }); 

    return (
        <main className="create-form">

            <FormHeader id={id}/>
            
            <TransitionGroup component={null}>
            {questions?.map(quest => {

                    const SpecificType = componentsCreate[quest.question_type]
                    
                    return ( 
                        <CSSTransition
                            key={quest.question_id}
                            classNames="example"
                            timeout={{ enter: 300, exit: 300 }}
                        >
                        <div className="question-div">
                            <SpecificType 
                                value={quest} 
                                saveFormQuestions={questForm}
                            />
                            <QuestionOptions 
                                id={id} 
                                value={quest}   
                            />
                        </div>
                        </CSSTransition>
                    )        
            })}
            </TransitionGroup>

            <article className="choose-type-main">
                <div className="fas fa-plus-circle" onClick={openTypes}></div>
                <AddType open={open}/>
            </article>
    
        </main>
    )
};

export default CreateForm;
