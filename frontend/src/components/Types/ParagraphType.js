import { useState, useContext } from "react";
import { TypeContext } from "../../context/TypeContext"

const ParagraphType = () => {

    const value = useContext(TypeContext);

    const [ paragraph, setParagraph ] = useState(value)

    const handleInput = e => {
        
    }

    return (
        <>
        {paragraph &&
        <div>
            <input onChange={handleInput} value={paragraph.title} />
            <textarea />
        </div>
        }
        </>
    )
}

export default ParagraphType;
