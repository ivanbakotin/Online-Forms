import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useSelector, useDispatch } from "react-redux"
import { useState, useCallback } from "react";
import { sendQuestionsToApi } from "../../redux/formSlice";
import debounce  from "../../utils/debounce";
import { componentsCreate } from "../../utils/variables";
import FormHeader from "../../components/FormHeader";
import QuestionOptions from "../../components/QuestionOptions";
import AddType from "../../components/AddType";

const CreateForm = ({ form_id }) => {

    const questions = useSelector(state => state.form.questions)

    const [ open, setOpen ] = useState(false)
    
    const openTypes = () => setOpen(!open)

    const dispatch = useDispatch()

    const questForm = useCallback(debounce(() => dispatch(sendQuestionsToApi())), []);

    return (
        <section className="create-form">

            <FormHeader/>
            
            <TransitionGroup component={null}>
            {questions?.map(quest => {

                    const SpecificType = componentsCreate[quest.question_type]

                    return ( 
                        <CSSTransition
                            key={quest.question_id}
                            classNames="example"
                            timeout={{ enter: 300, exit: 300 }}
                        >
                        <div onClick={questForm} onChange={questForm} className="question-div">
                            <SpecificType value={quest}/>
                            <QuestionOptions value={quest}/>
                        </div>
                        </CSSTransition>
                    )        
            })}
            </TransitionGroup>

            <article className="choose-type-main" onClick={questForm}>
                <div className="fas fa-plus-circle" onClick={openTypes}></div>
                <AddType form_id={form_id} open={open}/>
            </article>
    
        </section>
    )
};

export default CreateForm;
