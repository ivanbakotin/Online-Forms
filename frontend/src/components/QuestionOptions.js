import sendFetch from "../utils/sendFetch"

const QuestionOptions = (props) => {

    const { value, setQuestions, questions, id } = props

    function deleteQuestions() {
        sendFetch("/delete_question", "POST", { value, id })
        setQuestions(questions.filter(quest => value.question_id !== quest.question_id))
    }

    function setRequired() {
        value.required = true
    }

    return (
        <div>
            <button onClick={deleteQuestions}>Delete Question</button>
            <button onClick={setRequired}>Required checkbox</button>
            <button>Portal to change type</button>
        </div>
    )
}

export default QuestionOptions;
