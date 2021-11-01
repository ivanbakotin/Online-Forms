import { useState } from "react";

const SelectType = (props) => {

    const { value, saveFormQuestions } = props

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
