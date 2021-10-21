import { useState, useContext } from "react";
import { TypeContext } from "../context/TypeContext"

const FormHeader = () => {

    const value = useContext(TypeContext);

    const [ rows, setRows ] = useState(1)

    const [ info, setInfo ] = useState(value) 

    function handleInput(e) {
        //const { name, value } = e.target
        //setInfo(prev => ({ ...prev, [name]: value }))
        value.title = e.target.value
    }

    return (
        <>
            <input 
                onChange={handleInput} 
                name="title" 
                type="text" 
                value={value.title}
            />
            <textarea 
                onChange={handleInput}
                name="description" 
                value={value.description}
                rows={rows} 
            />
        </>
    )
}

export default FormHeader;
