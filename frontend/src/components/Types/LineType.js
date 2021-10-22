import { useState, useContext } from "react";
import { TypeContext } from "../../context/TypeContext"

const LineType = (props) => {

    const { saveFormQuestions } = props

    const value = useContext(TypeContext);

    const [ line, setLine ] = useState(value)

    const handleInput = e => setLine(e.target.value)

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
