import { useEffect, useState } from "react";
import { useParams } from "react-router";
import CheckboxType from "../../components/solveTypes/CheckboxType"
import ParagraphType from "../../components/solveTypes/ParagraphType"
import LineType from "../../components/solveTypes/LineType"
import SelectType from "../../components/solveTypes/SelectType";
import receiveFetch from "../../utils/receiveFetch"

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
                switch (quest.question_type) {          
                    case "line":
                        return ( 
                            <div key={quest.question_id}>
                                <LineType value={quest} />
                            </div>
                        )  
                    case "paragraph":
                        return ( 
                            <div key={quest.question_id}>
                                <ParagraphType value={quest} />
                            </div>
                        )   
                    case "checkbox":
                        return ( 
                            <div key={quest.question_id}>
                                <CheckboxType value={quest} />
                            </div>
                        ) 
                    case "select":
                        return ( 
                            <div key={quest.question_id}>
                                <SelectType value={quest} />
                            </div>
                        ) 
                    }                   
            })}
            </article>

            <button>Submit</button>

        </section>
    )
}

export default FilloutForm;
