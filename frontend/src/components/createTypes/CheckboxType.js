import { useState } from "react";
import sendFetch from "../../utils/sendFetch"
import TextareaAutosize from 'react-textarea-autosize';

const CheckboxType = ({ value, saveFormQuestions }) => {

    const [ checkbox, setCheckbox ] = useState(value)
   
    const handleCheckbox = e => {
        checkbox.sub_questions[Number(e.target.id)].qq_title = e.target.value
        setCheckbox(prev => ({ ...prev }))
    }

    const handleAdd = () => {
        console.log(checkbox)
        checkbox.sub_questions.push({ qq_id: checkbox.sub_questions.length, qq_title: "Option" })
        setCheckbox(prev => ({ ...prev }))
    }
    
    const handleInput= e => {
        setCheckbox(prev => ({ ...prev, [e.target.name]: e.target.value }))
        value[e.target.name] = e.target.value
    }

    const deleteCheckbox = e => {
        const qq_id = e.target.id
        sendFetch("/api/delete_quest_sub", "DELETE", { value, qq_id })
        const array = checkbox.sub_questions.filter(sub => sub.qq_id != qq_id)
        setCheckbox(prev => ({ ...prev, sub_questions: array }))
    }
    
    return (
        <>
        {checkbox &&
        <div className="checkbox-create" onChange={saveFormQuestions}>
            <TextareaAutosize 
                onChange={handleInput} 
                name="quest_title" 
                value={checkbox.quest_title || ""}
            />
            {!!checkbox?.sub_questions && checkbox.sub_questions.map(box => {
                return (
                        <div className="check-box" key={box.qq_id}>
                            <div>
                                <input 
                                    className="check"
                                    type="checkbox" 
                                    value={box.qq_title}
                                />
                                <input
                                    className="check-input"
                                    id={box.qq_id} 
                                    onChange={handleCheckbox}
                                    value={box.qq_title}
                                />
                            </div>
                            <div id={box.qq_id} onClick={deleteCheckbox} className="fas fa-times"></div>
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
