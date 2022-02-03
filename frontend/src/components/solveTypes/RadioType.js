const RadioType = ({ value }) => {

    const handleInput = e => value.answer_text = e.target.value
    
    return (
        <>
        <h2>{value.quest_title}</h2>
        {value?.sub_questions?.map(box => {
            return (
                <div className="check-box" key={box.qq_id} >
                    <input 
                        onChange={handleInput} 
                        type="radio" 
                        id={box.qq_id + "" + box.question_id} 
                        value={box.qq_title} 
                        name={value.question_id}
                    />
                    <label htmlFor={box.qq_id + "" + box.question_id}>{box.qq_title}</label>
                </div>
            )
        })}
        </>
    )
}

export default RadioType;
