import { useState, useEffect, useContext } from "react";
import { TypeContext } from "../../context/TypeContext"

const CheckboxType = (props) => {

    const { saveFormQuestions } = props

    const value = useContext(TypeContext);

    const [ checkbox, setCheckbox ] = useState()
    
    useEffect(() => setCheckbox(value), [])

    const handleAdd = () => {
        checkbox.checkbox_list.push("Checkbox1")
        setCheckbox(prev => ({ ...prev }))
    }

    const handleCheckbox = e => {
        checkbox.checkbox_list[Number(e.target.name)] = e.target.value
        setCheckbox(prev => ({ ...prev }))
    }
    
    const handleInput= e => {
        setCheckbox(prev => ({ ...prev, [e.target.name]: e.target.value }))
        value.quest_title = e.target.value
    }
    
    return (
        <>
        {checkbox &&
        <div onChange={saveFormQuestions}>
            <input onChange={handleInput} name="quest_title" value={checkbox.quest_title}/>
            {checkbox.checkbox_list.map((box, index) => {
                return (
                        <div key={index}>
                            <input 
                                type="checkbox" 
                                id={box} 
                                name={index} 
                                value={box}
                            />
                            <input
                                name={index} 
                                value={box}
                                onChange={handleCheckbox}
                            />
                        </div>
                )
            })}
            <div onClick={handleAdd}>Add checkbox1</div>
        </div>
        }
        </>
    )
}

export default CheckboxType;
