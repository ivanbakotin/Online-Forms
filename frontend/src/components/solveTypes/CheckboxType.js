import { useState } from "react";

const CheckboxType = ({ value, handleInput }) => {

    const [ checkbox, setCheckbox ] = useState(value)
   
    return (
        <>
        {checkbox &&
        <div onChange={handleInput}>
            <h2>{checkbox.quest_title}</h2>
            {!!checkbox?.sub_questions && checkbox.sub_questions.map(box => {
                return (
                    <>
                    <input type="checkbox" name={box} value={box} />
                    <label htmlFor={box}>{box}</label>
                    </>
                )
            })}
        </div>
        }
        </>
    )
}

export default CheckboxType;
