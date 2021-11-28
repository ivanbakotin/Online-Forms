import { useEffect, useState } from "react";
import { useParams } from "react-router";
import receiveFetch from "../../utils/receiveFetch"
import { componentsSolve } from "../../utils/variables";

const FilloutForm = () => {

    const { id } = useParams()

    const [ info, setInfo ] = useState({})
    const [ questions, setQuestions ] = useState([])

    useEffect(() => {
        async function fetchData() {
            const form_info = await receiveFetch("/auth/get_form_info", "POST", { id })
            setInfo({ form_title: form_info.form_title, descrip: form_info.descrip })
            setQuestions(form_info.questions)
        }

        fetchData()
    }, [])

    function sendForm(e) {
        e.preventDefault()
        receiveFetch("/auth/send_filled_form", "POST", { questions })
        .then(() => {})
    }

    return (
        <main className="fillout-form">
            
            <header>
                <h1>{info.form_title}</h1>
                <p>{info.descrip}</p>
            </header>

            <form onSubmit={sendForm}>

                {questions.map(quest => {

                    const SpecificType = componentsSolve[quest.question_type]
                
                    return ( 
                        <div className="question-div" key={quest.question_id}>
                            <SpecificType value={quest} />
                        </div>
                    )        
                })} 

                <button type="submit">Submit</button>
            </form>
        </main>
    )
}

export default FilloutForm;
