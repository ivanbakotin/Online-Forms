import { useDispatch } from "react-redux";
import { deleteQuestion, changeType, setRequired } from "../redux/formSlice";
import { types } from "../utils/variables";

const QuestionOptions = ({ value }) => {
  const dispatch = useDispatch();

  const toDeleteQuestions = () => dispatch(deleteQuestion({ value }));

  const toSetRequired = () => dispatch(setRequired({ id: value.question_id }));

  const toChangeType = (e) =>
    dispatch(changeType({ id: value.question_id, type: e.target.value }));

  return (
    <div className="question-options">
      <div className="far fa-trash-alt" onClick={toDeleteQuestions}></div>
      <div className="required">
        <label htmlFor="required">Required</label>
        <input
          checked={value.required}
          id="required"
          type="checkbox"
          className="checkbox-fake"
          onClick={toSetRequired}
        />
      </div>
      <div>
        <select
          value={value.question_type}
          onChange={toChangeType}
          name="type"
          id="type"
        >
          {types.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default QuestionOptions;
