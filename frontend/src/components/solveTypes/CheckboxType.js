import { useState } from "react";

const CheckboxType = ({ value }) => {

    const [ checkbox, setCheckbox ] = useState(value)

    const handleInput = e => {

    }
   
    return (
        <>
        {checkbox &&
        <div onChange={handleInput}>
            <h2>{value.quest_title}</h2>
            {!!checkbox?.sub_questions && checkbox.sub_questions.map(box => {
                return (
                    <>
                    <input type="checkbox" id={box.qq_id + "" + box.question_id} name={box.qq_title} value={box.qq_title} />
                    <label htmlFor={box.qq_id + "" + box.question_id}>{box.qq_title}</label>
                    </>
                )
            })}
        </div>
        }
        </>
    )
}

export default CheckboxType;
