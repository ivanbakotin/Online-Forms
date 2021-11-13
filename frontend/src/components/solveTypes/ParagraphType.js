const ParagraphType = ({ value }) => {

    const handleInput = e => value["answer"] = e.target.value
    
    return (
        <>
            <div>{value.quest_title}</div>
            <textarea onChange={handleInput}/>
        </>
    )
}

export default ParagraphType;
