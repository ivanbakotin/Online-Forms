import { useState, useCallback } from "react";
import FormHeader from "../../components/FormHeader";
import QuestionOptions from "../../components/QuestionOptions";
import AddType from "../../components/AddType";
import debounce  from "../../utils/debounce";
import { componentsCreate } from "../../utils/variables";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useSelector } from "react-redux"
import { sendQuestionsToApi } from "../../redux/formSlice";
import { useDispatch } from "react-redux";

const CreateForm = ({ form_id }) => {

    const questions = useSelector(state => state.form.questions)
    
    const [ open, setOpen ] = useState(false)
    
    const openTypes = () => setOpen(!open)

    const dispatch = useDispatch()

    const questForm = useCallback(debounce(() => dispatch(sendQuestionsToApi({ form_id }))), []);

    return (
        <main className="create-form">

            <FormHeader form_id={form_id}/>
            
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
                                form_id={form_id} 
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
