import { useEffect, useState } from "react";
import { useParams } from "react-router";
import receiveFetch from "../../utils/receiveFetch"
import { componentsSolve } from "../../utils/variables";

const FilloutForm = () => {

    const { id } = useParams()

    const [ form, setForm ] = useState([])

    useEffect(() => {
        async function fetchData() {
            const form_info = await receiveFetch("/auth/get_form_info", "POST", { id })
            setForm(form_info)
        }

        fetchData()
    }, [])

    function sendForm(e) {
        e.preventDefault()
        receiveFetch("/auth/send_filled_form", "POST", form )
        .then(() => {})
    }

    return (
        <main className="fillout-form">
            
            <header>
                <h1>{form?.form_title}</h1>
                <p>{form?.descrip}</p>
            </header>

            <form onSubmit={sendForm}>

                {form?.questions?.map(quest => {

                    const SpecificType = componentsSolve[quest.question_type]
                
                    return ( 
                        <div className="fillout-quest-div" key={quest.question_id}>
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
