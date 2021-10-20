import { useState, useContext } from "react";
import { TypeContext } from "../../context/TypeContext"

const LineType = () => {

    const value = useContext(TypeContext);

    const [ line, setLine ] = useState(value)

    const handleInput = e => {
        
    }

    return (
        <>
        {line &&
        <div>
            <input onChange={handleInput} value={value.title} />
            <input type="text" />
        </div>
        }
        </>
    )
}

export default LineType;
