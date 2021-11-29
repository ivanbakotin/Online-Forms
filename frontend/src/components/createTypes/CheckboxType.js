import TextareaAutosize from 'react-textarea-autosize';
import { useDispatch } from "react-redux"
import { updateQuestion, updateSubQuestion, addSubQuestion, deleteSubQuestion } from "../../redux/formSlice";

const CheckboxType = ({ value, saveFormQuestions }) => {

    const dispatch = useDispatch()
    
    const handleInput = e => dispatch(updateQuestion({id: value.question_id, value: e.target.value}))
    
    const handleCheckbox = e => {
        dispatch(updateSubQuestion({id: value.question_id, qq_id: e.target.id, value: e.target.value}))
    }

    const handleAdd = () => dispatch(addSubQuestion({ id: value.question_id, form_id: value.form_id }))
    
    const deleteCheckbox = e => dispatch(deleteSubQuestion({ value, qq_id: e.target.id }))

    return (
        <>
        <div className="checkbox-create" onClick={saveFormQuestions}>
            <TextareaAutosize 
                onChange={handleInput} 
                name="quest_title" 
                value={value.quest_title}
            />
            {value?.sub_questions?.map(box => {
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
                                id={box.qq_id} 
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
