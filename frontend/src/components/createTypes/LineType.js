import { useState } from "react";

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
            <textarea 
                rows={1} 
                name="quest_title" 
                onChange={handleInput} 
                value={line.quest_title || ""} 
            />
            <textarea rows={1} />
        </div>
        }
        </>
    )
}

export default LineType;
