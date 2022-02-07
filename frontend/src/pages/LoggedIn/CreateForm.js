import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useSelector, useDispatch } from "react-redux"
import { useState, useCallback, useRef, useEffect } from "react";
import { sendQuestionsToApi } from "../../redux/formSlice";
import debounce  from "../../utils/debounce";
import { componentsCreate } from "../../utils/variables";
import FormHeader from "../../components/FormHeader";
import QuestionOptions from "../../components/QuestionOptions";
import AddType from "../../components/AddType";

const CreateForm = ({ form_id }) => {

    const moveRef = useRef();
    const questRef = useRef([]);

    const questions = useSelector(state => state.form.questions)

    const [ open, setOpen ] = useState(false)
    
    const openTypes = () => setOpen(!open)

    const dispatch = useDispatch()

    const questForm = useCallback(debounce(() => dispatch(sendQuestionsToApi())), []);

    useEffect(() => {

    }, [])

    function openQuestion(e) {
        const index = e.target.getAttribute('dataindex');
        const posY = questRef.current[index].getBoundingClientRect().y;
        moveRef.current.style.top = posY + "px";
    }

    return (
        <section className="create-form">

            <FormHeader/>
            
            <TransitionGroup component={null}>
            {questions?.map((quest, index) => {

                    const SpecificType = componentsCreate[quest.question_type]

                    return ( 
                        <CSSTransition
                            key={quest.question_id}
                            classNames="example"
                            timeout={{ enter: 300, exit: 300 }}
                        >
                        <div 
                            dataindex={index}
                            ref={el => questRef.current[index] = el} 
                            onClick={questForm, openQuestion} 
                            onChange={questForm} 
                            className="question-div"
                        >
                            <SpecificType value={quest}/>
                            <QuestionOptions value={quest}/>
                        </div>
                        </CSSTransition>
                    )        
            })}
            </TransitionGroup>

            <div ref={moveRef} className="choose-type-main" onClick={questForm}>
                <div className="fas fa-plus-circle" onClick={openTypes}></div>
                <AddType form_id={form_id} open={open}/>
            </div>
    
        </section>
    )
};

export default CreateForm;
