import { useEffect, useState } from "react"
import receiveFetch from "../../utils/receiveFetch"

const FormResponses = ({ id }) => {

    const [ answers, setAnswers ] = useState([])

    useEffect(() => {
        async function fetchData() {
            const form_result = await receiveFetch("/api/get_form_responses", "POST", { id })
            setAnswers(form_result)
        }

        fetchData()
    }, [])

    return (
        <section>
            RESPONSES
        </section>
    )
}

export default FormResponses;
