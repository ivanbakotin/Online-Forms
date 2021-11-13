import { useEffect, useState } from "react";
import { useParams } from "react-router";
import receiveFetch from "../../utils/receiveFetch"
import { componentsSolve } from "../../utils/variables";

const FilloutForm = () => {

    const { id } = useParams()

    const [ info, setInfo ] = useState({})
    const [ questions, setQuestions ] = useState([])

    const [ answers, setAnswers ] = useState([])

    useEffect(() => {
        async function fetchData() {
            const form_info = await receiveFetch("/api/get_form_info", "POST", { id  })
            setInfo({ form_title: form_info.form_title, descrip: form_info.descrip })
            setQuestions(form_info.questions)
        }

        fetchData()
    }, [])

    return (
        <section className="create-form">
            
            <header>
                <h1>{info.form_title}</h1>
                <p>{info.form_descrip}</p>
            </header>

            <article>
            {questions.map(quest => {

                const SpecificType = componentsSolve[quest.question_type]
            
                return ( 
                    <div key={quest.question_id}>
                        <SpecificType value={quest} />
                    </div>
                )        
            })}
            </article>

            <button>Submit</button>

        </section>
    )
}

export default FilloutForm;
