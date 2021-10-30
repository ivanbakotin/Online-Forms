import { TypeContext } from "../context/TypeContext"
import { useContext } from "react";

const QuestionOptions = () => {

    const value = useContext(TypeContext);

    return (
        <div>
            <button>Delete Form</button>
            <button>Portal to change type</button>
            <button>Required checkbox</button>
        </div>
    )
}

export default QuestionOptions;
