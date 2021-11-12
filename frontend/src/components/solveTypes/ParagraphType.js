import { useState } from "react";

const ParagraphType = ({ value, saveFormQuestions }) => {

    const [ paragraph, setParagraph ] = useState(value)

    const handleInput = e => {

    }
    
    return (
        <>
        {paragraph &&
        <div onChange={handleInput}>
            <div>{paragraph.quest_title}</div>
            <textarea />
        </div>
        }
        </>
    )
}

export default ParagraphType;
