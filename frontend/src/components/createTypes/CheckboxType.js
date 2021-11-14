import { useState } from "react";

const CheckboxType = ({ value, saveFormQuestions }) => {

    const [ checkbox, setCheckbox ] = useState(value)
   
    const handleCheckbox = e => {
        checkbox.sub_questions[Number(e.target.id)].qq_title = e.target.value
        setCheckbox(prev => ({ ...prev }))
    }

    const handleAdd = () => {
        checkbox.sub_questions.push({ qq_id: checkbox.sub_questions.length, qq_title: "Option" })
        setCheckbox(prev => ({ ...prev }))
    }
    
    const handleInput= e => {
        setCheckbox(prev => ({ ...prev, [e.target.name]: e.target.value }))
        value[e.target.name] = e.target.value
    }
    
    return (
        <>
        {checkbox &&
        <div className="checkbox-create" onChange={saveFormQuestions}>
            <textarea 
                rows={1}
                onChange={handleInput} 
                name="quest_title" 
                value={checkbox.quest_title || ""}
            />
            {!!checkbox?.sub_questions && checkbox.sub_questions.map((box, index) => {
                return (
                        <div className="check-input" key={index}>
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
            <div className="add-check" onClick={handleAdd}>Add Checkbox</div>
        </div>
        }
        </>
    )
}

export default CheckboxType;
