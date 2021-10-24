import { useState, useContext } from "react";
import { TypeContext } from "../../context/TypeContext"

const SelectType = (props) => {

    const { saveFormQuestions } = props

    const value = useContext(TypeContext);

    const [ select, setSelect ] = useState(value)

    return (
        <>
        {select &&  
        <div onChange={saveFormQuestions}>
            <input value={select.quest_title} />
            <input type="text" />
        </div>
        }
        </>
    )
}

export default SelectType;
