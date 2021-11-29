const FormResponses = ({ form_id, answers, setAnswers }) => {

    function filterArray() {
        
    }

    return (
        <main className="responses">
            {
                answers?.map(answer => {
                    return (
                        <div key={answer.question_id}>
                            {answer.quest_title}:
                            {answer.answer_text}
                        </div>
                    )
                })
            }
        </main>
    )
}

export default FormResponses;
