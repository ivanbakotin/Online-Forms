import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useSelector, useDispatch } from "react-redux";
import { useState, useCallback, useRef } from "react";
import { sendQuestionsToApi, addQuestion } from "../../redux/formSlice";
import debounce from "../../utils/debounce";
import { componentsCreate } from "../../utils/variables";
import FormHeader from "../../components/FormHeader";
import QuestionOptions from "../../components/QuestionOptions";

const CreateForm = ({ form_id }) => {
  const moveRef = useRef();

  const dispatch = useDispatch();

  const questions = useSelector((state) => state.form.questions);

  const [activeQuestion, setActiveQuestion] = useState();

  function newQuestion() {
    dispatch(addQuestion({ question_type: "Line", form_id }));
  }

  const questForm = useCallback(
    debounce(() => dispatch(sendQuestionsToApi())),
    []
  );

  function openQuestion(e) {
    while (!e.target.hasAttribute("dataid")) {
      e.target = e.target.parentNode;
    }
    setActiveQuestion(e.target.getAttribute("dataid"));
  }

  return (
    <section className="create-form">
      <FormHeader />

      <TransitionGroup component={null}>
        {questions?.map((quest) => {
          const SpecificType = componentsCreate[quest.question_type];

          return (
            <CSSTransition
              key={quest.question_id}
              classNames="example"
              timeout={{ enter: 300, exit: 300 }}
            >
              <div
                dataid={quest.question_id}
                onClick={(e) => {
                  questForm();
                  openQuestion(e);
                }}
                onChange={questForm}
                className="question-div"
              >
                <SpecificType value={quest} />
                {activeQuestion == quest.question_id && (
                  <QuestionOptions value={quest} />
                )}
              </div>
            </CSSTransition>
          );
        })}
      </TransitionGroup>

      <span ref={moveRef} className="choose-type-main" onClick={questForm}>
        <div className="fas fa-plus-circle" onClick={newQuestion}></div>
      </span>
    </section>
  );
};

export default CreateForm;
