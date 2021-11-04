import { useState } from "react";

const ParagraphType = (props) => {

    const { value, saveFormQuestions } = props

    const [ paragraph, setParagraph ] = useState(value)

    const handleInput = e => {
        setParagraph(e.target.value)
        value[e.target.name] = e.target.value
    }
    
    return (
        <>
        {paragraph &&
        <div onChange={saveFormQuestions}>
            <input type="text" onChange={handleInput} value={paragraph.quest_title} />
            <textarea />
        </div>
        }
        <input type="number" name="points" onChange={handleInput} value={paragraph.points} placeholder="Number of points"/>
        <input type="text" name="correct_text" onChange={handleInput} value={paragraph.correct_text} placeholder="Correct Answer"/>
        </>
    )
}

export default ParagraphType;
