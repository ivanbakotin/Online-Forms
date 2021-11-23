import { useDispatch } from "react-redux"
import { addQuestion } from "../redux/formSlice";

const AddType = ({ open }) => {

      const dispatch = useDispatch();    

      function newQuestion(e) {
            dispatch(addQuestion({question_type: e.target.getAttribute("name")}))                  
      }

      if (!open) return null

      return (    
      	<div className="choose-type">
	      	<div className="fas fa-check-square" name="Checkbox" onClick={newQuestion}></div>
                  <div className="fas fa-align-left" name="Paragraph" onClick={newQuestion}></div>
                  <div className="fab fa-line" name="Line" onClick={newQuestion}></div>
        	</div>
      )
}

export default AddType;
