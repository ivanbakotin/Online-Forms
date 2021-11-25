import TextareaAutosize from 'react-textarea-autosize';
import { useDispatch } from "react-redux"
import { updateQuestion } from "../../redux/formSlice"

const ParagraphType = ({ value, saveFormQuestions }) => {

    const dispatch = useDispatch()

    const handleInput = e => dispatch(updateQuestion({id: value.question_id, value: e.target.value}))

    return (
        <div className="paragraph-create" onChange={saveFormQuestions}>
            <TextareaAutosize 
                name="quest_title" 
                onChange={handleInput} 
                value={value.quest_title} 
            />
            <TextareaAutosize minRows={3} />
        </div>
    )
}

export default ParagraphType;
