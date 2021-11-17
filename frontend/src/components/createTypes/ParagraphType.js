import { useState } from "react";
import TextareaAutosize from 'react-textarea-autosize';

const ParagraphType = ({ value, saveFormQuestions }) => {

    const [ paragraph, setParagraph ] = useState(value)

    const handleInput = e => {
        setParagraph(prev => ({ ...prev, [e.target.name]: e.target.value }))
        value[e.target.name] = e.target.value
    }
    
    return (
        <>
        {paragraph &&
        <div className="paragraph-create" onChange={saveFormQuestions}>
            <TextareaAutosize 
                name="quest_title" 
                onChange={handleInput} 
                value={paragraph.quest_title || ""} 
            />
            <TextareaAutosize minRows={3} />
        </div>
        }
        </>
    )
}

export default ParagraphType;
