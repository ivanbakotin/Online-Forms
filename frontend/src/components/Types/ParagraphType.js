import { useState, useContext, useEffect } from "react";
import { TypeContext } from "../../context/TypeContext"

const ParagraphType = (props) => {

    const { saveFormQuestions } = props

    const value = useContext(TypeContext);

    const [ paragraph, setParagraph ] = useState(value)

    const handleInput = e => setParagraph(e.target.value);
    

    return (
        <>
        {paragraph &&
        <div onChange={saveFormQuestions}>
            <input onChange={handleInput} index={value.id} name="quest_title" value={paragraph.quest_title} />
            <textarea />
        </div>
        }
        </>
    )
}

export default ParagraphType;
