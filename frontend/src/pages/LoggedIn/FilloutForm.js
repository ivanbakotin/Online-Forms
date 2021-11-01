import { useEffect, useState } from "react";

const FilloutForm = () => {

    const [ questions, setQuestions ] = useState([])

    const [ answers, setAnswers ] = useState([])

    useEffect(() => {
        // fetch questions
    }, [])

    return (
        <article>
            {!!questions.length && questions.map(quest => {
                //switch on type
                return (
                    <div>
                        
                    </div>
                )
            })

            }
        </article>
    )
}

export default FilloutForm;
