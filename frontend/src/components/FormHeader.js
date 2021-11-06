import { useState, useEffect } from "react";
import { categories } from "../utils/variables";

const FormHeader = (props) => {

    const { value, saveFormMain } = props

    const [ rows, setRows ] = useState(1)

    const [ info, setInfo ] = useState(value) 

    useEffect(() => setInfo(value), [value])

    function handleInput(e) {
        setInfo(prev => ({ ...prev, [e.target.name]: e.target.value }))
        if (e.target.name === "form_title") value.form_title = e.target.value
        if (e.target.name === "descrip") value.descrip = e.target.value
    }

    return (
        <>
        {info &&
        <div className="form-header" onChange={saveFormMain}>
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
            <label htmlFor="category">Choose a category:</label>
                <select value={info.category} name="cat" id="cat">
                {categories.map(cat => <option value={cat}>{cat}</option>)}
            </select>
        </div>
        }
        </>
    )
}

export default FormHeader;
