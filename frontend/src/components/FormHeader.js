import { useState, useEffect } from "react";
import TextareaAutosize from 'react-textarea-autosize';

const FormHeader = ({ value, saveFormMain }) => {
    
    const [ info, setInfo ] = useState(value) 

    useEffect(() => setInfo(value), [value])

    function handleInput(e) {
        setInfo(prev => ({ ...prev, [e.target.name]: e.target.value }))
        value[e.target.name] = e.target.value
    }

    return (
        <header className="form-header" onChange={saveFormMain}>
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
