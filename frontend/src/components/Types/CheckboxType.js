import { useState, useEffect, useContext } from "react";
import { TypeContext } from "../../context/TypeContext"

const CheckboxType = (props) => {

    const { saveFormQuestions } = props

    const value = useContext(TypeContext);

    const [ checkbox, setCheckbox ] = useState(value)
    
    //useEffect(() => setCheckbox(value), [])

    const handleAdd = () => {
        console.log(checkbox.checkbox_list)
        const index = checkbox.checkbox_list[checkbox.checkbox_list.length - 1].id + 1
        checkbox.checkbox_list.push({ id: index, qq_title: "Another option" })
        setCheckbox(prev => ({ ...prev }))
    }

    const handleCheckbox = e => {
        checkbox.checkbox_list[Number(e.target.id)] = e.target.value
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
                                id={index} 
                                value={box.qq_title}
                            />
                            <input
                                onChange={handleCheckbox}
                                value={box.qq_title}
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
