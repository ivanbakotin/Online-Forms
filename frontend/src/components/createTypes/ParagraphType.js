import { useState } from "react";

const ParagraphType = ({ value, saveFormQuestions }) => {

    const [ paragraph, setParagraph ] = useState(value)

    const handleInput = e => {
        setParagraph(prev => ({ ...prev, [e.target.name]: e.target.value }))
        value[e.target.name] = e.target.value
    }
    
    return (
        <>
        {paragraph &&
        <div onChange={saveFormQuestions}>
            <input type="text" name="quest_title" onChange={handleInput} value={paragraph.quest_title || ""} />
            <textarea />
        </div>
        }
        </>
    )
}

export default ParagraphType;
