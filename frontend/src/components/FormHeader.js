import { useState, useContext } from "react";
import { TypeContext } from "../context/TypeContext"

const FormHeader = (props) => {

    const { saveFormMain } = props

    const value = useContext(TypeContext);

    const [ rows, setRows ] = useState(1)

    const [ info, setInfo ] = useState(value) 

    function handleInput(e) {
        setInfo(prev => ({ ...prev, [e.target.name]: e.target.value }))
        if (e.target.name === "title") value.title = e.target.value
        if (e.target.name === "descrip") value.descrip = e.target.value
    }

    return (
        <div onChange={saveFormMain}>
            <input 
                onChange={handleInput} 
                name="title" 
                type="text" 
                value={info.title}
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
