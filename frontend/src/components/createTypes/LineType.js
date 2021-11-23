import { useDispatch } from "react-redux"
import { updateQuestion } from "../../redux/formSlice"

const LineType = ({ value, saveFormQuestions }) => {

    const dispatch = useDispatch()

    const handleInput = e => dispatch(updateQuestion({id: value.question_id, value: e.target.value}))

    return (
        <div className="line-create" onChange={saveFormQuestions}>
            <input 
                name="quest_title" 
                onChange={handleInput} 
                value={value.quest_title || ""} 
            />
            <input />
        </div>
    )
}

export default LineType;

/*
import { useDispatch, useSelector } from "react-redux"
import { updateQuestion } from "../../redux/formSlice"

const LineType = ({ q_id, saveFormQuestions }) => {

    const dispatch = useDispatch()
    
    const question = useSelector(state => state.form.questions.find(q => q.question_id === q_id))

    const handleInput = e => dispatch(updateQuestion({id: question.question_id, value: e.target.value}))

    return (
        <div className="line-create" onChange={saveFormQuestions}>
            <input 
                name="quest_title" 
                onChange={handleInput} 
                value={question.quest_title || ""} 
            />
            <input />
        </div>
    )
}

export default LineType;*/
