import TextareaAutosize from 'react-textarea-autosize';
import { useSelector } from "react-redux"
import debounce from '../utils/debounce';
import sendFetch from '../utils/sendFetch';

const FormHeader = ({ form_id }) => {

    const info = useSelector(state => ({ form_title: state.form.form_title, descrip: state.form.descrip }))

    const mainForm = debounce(() => sendFetch("/api/update_form_main", "POST", { info, form_id }));

    function handleInput(e) {
        
    }

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
