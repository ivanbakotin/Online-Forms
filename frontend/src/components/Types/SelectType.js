import { useState, useContext } from "react";
import { TypeContext } from "../../context/TypeContext"

const SelectType = () => {

    const value = useContext(TypeContext);

    const [ select, setSelect ] = useState(value)

    return (
        <>
        {select &&  
        <div>
            <input value={select.title} />
            <input type="text" />
        </div>
        }
        </>
    )
}

export default SelectType;
