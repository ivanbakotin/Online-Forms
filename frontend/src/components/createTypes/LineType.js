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
        <div onChange={saveFormQuestions}>
            <input onChange={handleInput} value={line.quest_title} />
            <input type="text" />
        </div>
        }
        </>
    )
}

export default LineType;
