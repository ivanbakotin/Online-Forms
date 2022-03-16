import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { findMaxMain, findMaxSub } from "../utils/findMax";
import receiveFetch from "../utils/receiveFetch";
import sendFetch from "../utils/sendFetch";

export const getFormInfo = createAsyncThunk(
  "getFormInfoAsync",
  async (payload) => {
    const response = await receiveFetch("/api/get_form_info", "POST", {
      id: payload.form_id,
    });
    return { response };
  }
);

const formSlice = createSlice({
  name: "form",
  initialState: [],
  reducers: {
    addQuestion: (state, action) => {
      const newQuest = {
        form_id: action.payload.form_id,
        question_id: findMaxMain(state.questions),
        quest_title: "Question?",
        question_type: action.payload.question_type,
        sub_questions: [{ qq_id: 0, qq_title: "Option" }],
      };

      if (state.questions === null) state.questions = [];

      state.questions.push(newQuest);
    },

    addSubQuestion: (state, action) => {
      const index = state.questions.findIndex(
        (q) => q.question_id === action.payload.id
      );

      const newQuest = {
        form_id: action.payload.form_id,
        question_id: action.payload.id,
        qq_id: findMaxSub(state.questions[index].sub_questions),
        qq_title: "Option",
      };

      if (state.questions[index].sub_questions === null)
        state.questions[index].sub_questions = [];

      state.questions[index].sub_questions.push(newQuest);
    },

    updateQuestion: (state, action) => {
      const index = state.questions.findIndex(
        (q) => q.question_id === action.payload.id
      );
      state.questions[index].quest_title = action.payload.value;
    },

    updateSubQuestion: (state, action) => {
      const index = state.questions.findIndex(
        (q) => q.question_id === action.payload.id
      );
      const index_2 = state.questions[index].sub_questions.findIndex(
        (q) => q.qq_id == action.payload.qq_id
      );
      state.questions[index].sub_questions[index_2].qq_title =
        action.payload.value;
    },

    deleteQuestion: (state, action) => {
      sendFetch("/api/delete_question", "DELETE", {
        value: action.payload.value,
      });
      return {
        ...state,
        questions: state.questions.filter(
          (q) => q.question_id != action.payload.value.question_id
        ),
      };
    },

    deleteSubQuestion: (state, action) => {
      sendFetch("/api/delete_quest_sub", "DELETE", {
        value: action.payload.value,
        qq_id: action.payload.qq_id,
      });
      const indexElement = state.questions.findIndex(
        (q) => q.question_id === action.payload.value.question_id
      );
      return {
        ...state,
        questions: state.questions.map((prev, index) =>
          index === indexElement
            ? {
                ...prev,
                sub_questions: state.questions[
                  indexElement
                ].sub_questions.filter((q) => q.qq_id != action.payload.qq_id),
              }
            : prev
        ),
      };
    },

    setRequired: (state, action) => {
      const index = state.questions.findIndex(
        (q) => q.question_id === action.payload.id
      );
      state.questions[index].required = !state.questions[index].required;
    },

    changeType: (state, action) => {
      const index = state.questions.findIndex(
        (q) => q.question_id === action.payload.id
      );
      state.questions[index].question_type = action.payload.type;
    },

    sendQuestionsToApi: (state) => {
      console.log("SENT");
      sendFetch("/api/update_form_questions", "POST", {
        questions: state.questions,
      });
    },

    updateForm: (state, action) => {
      state[action.payload.name] = action.payload.value;
    },

    sendInfoToApi: (state) => {
      sendFetch("/api/update_form_main", "POST", {
        form_title: state.form_title,
        descrip: state.descrip,
        form_id: state.id,
      });
    },
  },
  extraReducers: {
    [getFormInfo.fulfilled]: (state, action) => {
      return action.payload.response;
    },
  },
});

export const {
  addQuestion,
  updateQuestion,
  deleteQuestion,
  deleteSubQuestion,
  setRequired,
  changeType,
  updateForm,
  sendQuestionsToApi,
  updateSubQuestion,
  addSubQuestion,
  sendInfoToApi,
} = formSlice.actions;

export default formSlice.reducer;
