import TextareaAutosize from 'react-textarea-autosize';
import { findMaxSub } from "../../utils/findMax";
import { useDispatch } from "react-redux"
import { updateQuestion, updateSubQuestion } from "../../redux/formSlice";

const CheckboxType = ({ value, saveFormQuestions }) => {

    const dispatch = useDispatch()

    const handleInput = e => dispatch(updateQuestion({id: value.question_id, value: e.target.value}))
    
    const handleCheckbox = e => {
        dispatch(updateSubQuestion({id: value.question_id, value: e.target.value, qq_id: e.target.id}))
    }

    const handleAdd = () => {
        value.sub_questions.push({ qq_id: findMaxSub(value.sub_questions), qq_title: "Option" })
    }
    
    const deleteCheckbox = e => {
        const qq_id = e.target.id

        value.sub_questions.filter(sub => sub.qq_id != qq_id)
    }
    
    return (
        <>
        <div className="checkbox-create" onChange={saveFormQuestions}>
            <TextareaAutosize 
                onChange={handleInput} 
                name="quest_title" 
                value={value.quest_title || ""}
            />
            {!!value.sub_questions && value.sub_questions.map((box, index) => {
                return (
                    <div className="check-box" key={box.qq_id}>
                        <div>
                            <input 
                                className="check"
                                type="checkbox" 
                                value={box.qq_title}
                            />
                            <input
                                className="check-input"
                                id={index} 
                                onChange={handleCheckbox}
                                value={box.qq_title}
                            />
                        </div>
                        <div id={box.qq_id} onClick={deleteCheckbox} className="fas fa-times"></div>
                    </div>
                )
            })}
            <div className="add-check" onClick={handleAdd}>Add Checkbox</div>
        </div>
        </>
    )
}

export default CheckboxType;
