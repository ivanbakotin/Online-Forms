import sendFetch from "../utils/sendFetch"
import { types } from "../utils/variables"

const QuestionOptions = ({ value, setQuestions, questions, id }) => {

    function deleteQuestions() {
        sendFetch("/api/delete_question", "DELETE", { value, id })
        setQuestions(questions.filter(quest => value.question_id !== quest.question_id))
    }

    function setRequired() {
        value.required = true
    }

    function changeType(e) {
        value.question_type = e.target.value
        setQuestions(prev => [...prev])
    }

    return (
        <div>
            <button onClick={deleteQuestions}>Delete Question</button>
            <button onClick={setRequired}>Required checkbox</button>
            <label htmlFor="type">Type:</label>
            <select onChange={changeType} name="type" id="type">
                {types.map(type => <option key={type} value={type}>{type}</option>)}
            </select>
        </div>
    )
}

export default QuestionOptions;
