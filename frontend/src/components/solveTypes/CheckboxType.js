const CheckboxType = ({ value }) => {

    const handleInput = e => {
        if (!value["answer_array"]) value["answer_array"] = []
        if (value["answer_array"].includes(e.target.value)) {
            value["answer_array"] = value["answer_array"].filter(answer => answer != e.target.value)
        }
        else value["answer_array"].push(e.target.value)
    }

    return (
        <>
        <h2>{value.quest_title}</h2>
        {value?.sub_questions?.map(box => {
            return (
                <div className="check-box" key={box.qq_id} >
                    <input 
                        onChange={handleInput} 
                        type="checkbox" 
                        id={box.qq_id + "" + box.question_id} 
                        value={box.qq_title} 
                    />
                    <label htmlFor={box.qq_id + "" + box.question_id}>{box.qq_title}</label>
                </div>
            )
        })}
        </>
    )
}

export default CheckboxType;
