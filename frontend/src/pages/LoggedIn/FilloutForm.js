import { useEffect, useState } from "react";
import { useParams } from "react-router";
import receiveFetch from "../../utils/receiveFetch"
import sendFetch from "../../utils/sendFetch";
import { componentsSolve } from "../../utils/variables";

const FilloutForm = () => {

    const { id } = useParams()

    const [ info, setInfo ] = useState({})
    const [ questions, setQuestions ] = useState([])

    useEffect(() => {
        async function fetchData() {
            const form_info = await receiveFetch("/api/get_form_info", "POST", { id  })
            console.log(form_info)
            setInfo({ form_title: form_info.form_title, descrip: form_info.descrip })
            setQuestions(form_info.questions)
        }

        fetchData()
    }, [])

    function sendForm(e) {
        e.preventDefault()
        console.log({ questions, info })
        //sendFetch("/api/send_filled_form", "POST", { questions, info })
    }

    return (
        <section className="create-form">
            
            <header>
                <h1>{info.form_title}</h1>
                <p>{info.form_descrip}</p>
            </header>

            <form onSubmit={sendForm}>
                <div>
                {questions.map(quest => {

                    const SpecificType = componentsSolve[quest.question_type]
                
                    return ( 
                        <div className="question-div" key={quest.question_id}>
                            <SpecificType value={quest} />
                        </div>
                    )        
                })} 
                </div>

                <button type="submit">Submit</button>
            </form>


        </section>
    )
}

export default FilloutForm;
