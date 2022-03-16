import TextareaAutosize from "react-textarea-autosize";
import { useDispatch } from "react-redux";
import {
  updateQuestion,
  updateSubQuestion,
  addSubQuestion,
  deleteSubQuestion,
} from "../../redux/formSlice";

const LineType = ({ value }) => {
  const dispatch = useDispatch();

  const handleInput = (e) =>
    dispatch(updateQuestion({ id: value.question_id, value: e.target.value }));

  const handleCheckbox = (e) => {
    dispatch(
      updateSubQuestion({
        id: value.question_id,
        qq_id: e.target.id,
        value: e.target.value,
      })
    );
  };

  const handleAdd = () =>
    dispatch(addSubQuestion({ id: value.question_id, form_id: value.form_id }));

  const deleteCheckbox = (e) =>
    dispatch(deleteSubQuestion({ value, qq_id: e.target.id }));

  return (
    <div className="checkbox-create">
      <TextareaAutosize
        onChange={handleInput}
        name="quest_title"
        value={value.quest_title}
      />
      {value?.sub_questions?.map((box) => {
        return (
          <div className="check-box" key={box.qq_id}>
            <div>
              <input
                className="radio"
                type="radio"
                value={box.qq_title}
                id={box.qq_title}
                name={value.question_id}
              />
              <input
                type="text"
                className="check-input"
                id={box.qq_id}
                onChange={handleCheckbox}
                value={box.qq_title}
              />
            </div>
            <div
              id={box.qq_id}
              onClick={deleteCheckbox}
              className="fas fa-times"
            ></div>
          </div>
        );
      })}
      <div className="check-box" onClick={handleAdd}>
        <div>
          <span className="fas fa-plus"></span>
          <span className="new-option">
            <p>Another Option...</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LineType;
