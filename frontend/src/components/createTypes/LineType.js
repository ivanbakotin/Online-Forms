import { useState } from "react";
import TextareaAutosize from 'react-textarea-autosize';

const LineType = ({ value, saveFormQuestions }) => {

    const [ line, setLine ] = useState(value)

    const handleInput = e => {
        setLine(prev => ({ ...prev, [e.target.name]: e.target.value }))
        value[e.target.name] = e.target.value
    }

    return (
        <>
        {line &&
        <div className="line-create" onChange={saveFormQuestions}>
            <TextareaAutosize 
                name="quest_title" 
                onChange={handleInput} 
                value={line.quest_title || ""} 
            />
            <TextareaAutosize />
        </div>
        }
        </>
    )
}

export default LineType;
