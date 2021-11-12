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
            const form_info = await receiveFetch("/api/get_form_info_fillout", "POST", { id  })
            setInfo({ form_title: form_info.form_title, descrip: form_info.descrip, category: form_info.category })
            setQuestions(form_info.questions)
        }

        fetchData()
    }, [])

    return (
        <article className="create-form">
            <div>
                <h1>{info.form_title}</h1>
                <p>{info.form_descrip}</p>
                <div>{info.category}</div>
            </div>
            <div>
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
            </div>
        </article>
    )
}

export default FilloutForm;
