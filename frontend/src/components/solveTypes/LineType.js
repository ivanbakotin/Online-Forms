const LineType = ({ value }) => {

    const handleInput = e => value.answer_text = e.target.value
     
    return (
        <>
            <div>{value.quest_title}</div>
            <input type="text" onChange={handleInput}/>
        </>
    )
}

export default LineType;
