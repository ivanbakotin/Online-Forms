import { useState, useContext, useEffect } from "react";
import { TypeContext } from "../context/TypeContext"

const FormHeader = (props) => {

    const { saveFormMain } = props

    const value = useContext(TypeContext);

    const [ rows, setRows ] = useState(1)

    const [ info, setInfo ] = useState(value) 

    useEffect(() => setInfo(value), [value])

    function handleInput(e) {
        setInfo(prev => ({ ...prev, [e.target.name]: e.target.value }))
        if (e.target.name === "form_title") value.form_title = e.target.value
        if (e.target.name === "descrip") value.descrip = e.target.value
    }

    return (
        <div onChange={saveFormMain}>
            <input 
                onChange={handleInput} 
                name="form_title" 
                type="text" 
                value={info.form_title}
            />
            <textarea 
                onChange={handleInput}
                name="descrip" 
                value={info.descrip}
                rows={rows} 
            />
        </div>
    )
}

export default FormHeader;
