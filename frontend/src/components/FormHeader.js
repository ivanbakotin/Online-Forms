import { useState, useEffect } from "react";

const FormHeader = ({ value, saveFormMain }) => {

    const [ rows, setRows ] = useState(1)

    const [ info, setInfo ] = useState(value) 

    useEffect(() => setInfo(value), [value])

    function handleInput(e) {
        setInfo(prev => ({ ...prev, [e.target.name]: e.target.value }))
        value[e.target.name] = e.target.value
    }

    return (
        <header className="form-header" onChange={saveFormMain}>
            <textarea 
                onChange={handleInput} 
                name="form_title" 
                value={info.form_title}
                rows={rows}
            />
            <textarea 
                onChange={handleInput}
                name="descrip" 
                value={info.descrip || ""}
                rows={rows} 
            />
        </header>
    )
}

export default FormHeader;
