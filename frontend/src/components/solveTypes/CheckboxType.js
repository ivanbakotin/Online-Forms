const CheckboxType = ({ value }) => {

    const handleInput = e => value["answer"] = e.target.value

    return (
        <>
        <h2>{value.quest_title}</h2>
        {value?.sub_questions.map(box => {
            return (
                <>
                <input 
                    onChange={handleInput} 
                    type="checkbox" 
                    id={box.qq_id + "" + box.question_id} 
                    value={box.qq_title} 
                />
                <label htmlFor={box.qq_id + "" + box.question_id}>{box.qq_title}</label>
                </>
            )
        })}
        </>
    )
}

export default CheckboxType;
