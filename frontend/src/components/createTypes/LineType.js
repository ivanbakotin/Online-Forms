import { useState } from "react";


const LineType = (props) => {

    const { value, saveFormQuestions } = props

    const [ line, setLine ] = useState(value)

    const handleInput = e => {
        setLine(e.target.value)
        value.quest_title = e.target.value
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
