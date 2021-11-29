import TextareaAutosize from 'react-textarea-autosize';

const ParagraphType = ({ value }) => {

    const handleInput = e => value.answer_text = e.target.value
    
    return (
        <>
            <div>{value.quest_title}</div>
            <TextareaAutosize minRows={3} onChange={handleInput}/>
        </>
    )
}

export default ParagraphType;
