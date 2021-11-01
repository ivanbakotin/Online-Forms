import { useState } from "react";

const CheckboxType = (props) => {

    const { value, saveFormQuestions } = props

    const [ checkbox, setCheckbox ] = useState(value)

    const handleAdd = () => {
        checkbox.sub_questions.push({ qq_id: checkbox.sub_questions.length, qq_title: "Another option" })
        setCheckbox(prev => ({ ...prev }))
        console.log(checkbox)
    }

    const handleCheckbox = e => {
        checkbox.sub_questions[Number(e.target.id)].qq_title = e.target.value
        setCheckbox(prev => ({ ...prev }))
    }
    
    const handleInput= e => {
        setCheckbox(prev => ({ ...prev, [e.target.name]: e.target.value }))
        value.quest_title = e.target.value
    }
    
    return (
        <>
        {checkbox &&
        <div onChange={saveFormQuestions}>
            <input onChange={handleInput} name="quest_title" value={checkbox.quest_title}/>
            {!!checkbox?.sub_questions && checkbox.sub_questions.map((box, index) => {
                return (
                        <div key={index}>
                            <input 
                                type="checkbox" 
                                value={box.qq_title}
                            />
                            <input
                                id={index} 
                                onChange={handleCheckbox}
                                value={box.qq_title}
                            />
                        </div>
                )
            })}
            <div onClick={handleAdd}>Add checkbox1</div>
        </div>
        }
        </>
    )
}

export default CheckboxType;
