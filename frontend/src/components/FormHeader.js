import TextareaAutosize from 'react-textarea-autosize';
import { useSelector, useDispatch } from "react-redux"
import debounce from '../utils/debounce';
import { useCallback } from 'react';
import { sendInfoToApi, updateForm } from '../redux/formSlice';

const FormHeader = () => {

    const dispatch = useDispatch()

    const info = useSelector(state => state.form)

    const mainForm = useCallback(debounce(() => dispatch(sendInfoToApi())), []);

    const handleInput = e => dispatch(updateForm({ name: e.target.name, value: e.target.value}))

    return (
        <header className="form-header" onChange={mainForm}>
            <TextareaAutosize 
                onChange={handleInput} 
                name="form_title" 
                value={info.form_title}
            />
            <TextareaAutosize 
                onChange={handleInput}
                name="descrip" 
                value={info.descrip || ""}
                minRows={3}
            />
        </header>
    )
}

export default FormHeader;
