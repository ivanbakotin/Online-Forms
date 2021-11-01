import { useState } from "react";

const ParagraphType = (props) => {

    const { value, saveFormQuestions } = props

    const [ paragraph, setParagraph ] = useState(value)

    const handleInput = e => {
        setParagraph(e.target.value)
        value.quest_title = e.target.value
    }
    
    return (
        <>
        {paragraph &&
        <div onChange={saveFormQuestions}>
            <input onChange={handleInput} value={paragraph.quest_title} />
            <textarea />
        </div>
        }
        </>
    )
}

export default ParagraphType;
