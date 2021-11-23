import TextareaAutosize from 'react-textarea-autosize';

const ParagraphType = ({ value, saveFormQuestions }) => {

    const handleInput = e => {
        value[e.target.name] = e.target.value
    }
    
    return (
        <div className="paragraph-create" onChange={saveFormQuestions}>
            <TextareaAutosize 
                name="quest_title" 
                onChange={handleInput} 
                value={value.quest_title || ""} 
            />
            <TextareaAutosize minRows={3} />
        </div>
    )
}

export default ParagraphType;
