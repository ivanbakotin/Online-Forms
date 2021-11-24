import sendFetch from "../utils/sendFetch"
import { useDispatch } from "react-redux"
import { deleteQuestion, changeType } from "../redux/formSlice"
import { types } from "../utils/variables"

const QuestionOptions = ({ value, id }) => {

    const dispatch = useDispatch();

    const toDeleteQuestions = () => dispatch(deleteQuestion({ value, id: value.question_id }))
    
    const setRequired = () => value.required = !value.required

    const toChangeType = e => dispatch(changeType({ id: value.question_id, type: e.target.value }))

    return (
        <div className="question-options">
            <div className="far fa-trash-alt" onClick={toDeleteQuestions}></div>
            <div onClick={setRequired}>Required checkbox</div>
            <div>
                <label htmlFor="type">Type:</label>
                <select value={value.question_type} onChange={toChangeType} name="type" id="type">
                    {types.map(type => <option key={type} value={type}>{type}</option>)}
                </select>
            </div>
        </div>
    )
}

export default QuestionOptions;
