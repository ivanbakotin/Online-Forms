const FormResponses = ({ form_id, answers, setAnswers }) => {

    function filterArray() {
        
    }

    return (
        <section className="responses">
            <div>
            {answers?.map(answer => {
                return (
                    <div key={answer.question_id}>
                        {answer.quest_title}: {answer.answer_text}
                        {answer.answer_array?.map(ans => {
                            return (
                                <>
                                {` ${ans}`}
                                </>
                            )
                        })}
                    </div>
                )
            })}
            </div>
        </section>
    )
}

export default FormResponses;
