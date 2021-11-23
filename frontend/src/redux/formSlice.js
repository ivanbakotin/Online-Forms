import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { findMaxMain } from "../utils/findMax"
import receiveFetch from "../utils/receiveFetch"

export const getFormInfo = createAsyncThunk(
    "getFormInfoAsync",
    async (payload) => {
        const response = await receiveFetch("/api/get_form_info", "POST", { id: payload.id })
        return { response }
    }
)

const formSlice = createSlice({
    name: "form",
    initialState: [],
    reducers: {
        addQuestion: ( state, action ) => {
            const newQuest = {
                question_id: findMaxMain(state.questions), 
                quest_title: "Question?", 
                question_type: action.payload.question_type,
                sub_questions: [{ qq_id: 0, qq_title: "Option" }],
            };
            state.questions.push(newQuest)
        },
        updateQuestion: ( state, action ) => {
            const index = state.questions.findIndex(q => q.question_id === action.payload.id)
            state.questions[index].quest_title = action.payload.value
        },
        deleteQuestion: ( state, action ) => {
            return state.questions.filter(quest => quest.question_id != action.payload.id)
        },
        deleteSubQuestion: ( state, action ) => {
            
        },
        setRequired: ( state, action ) => {
            
        },
        changeType: ( state, action ) => {
            const index = state.questions.findIndex(q => q.question_id === action.payload.id)
            state.questions[index].question_type = action.payload.value
        },
        updateForm: ( state, action ) => {
            
        },
    },
    extraReducers: {
        [getFormInfo.fulfilled]: ( state, action ) => {
            return action.payload.response
        }
    }
})

export const { 
        addQuestion, 
        updateQuestion,
        deleteQuestion,
        deleteSubQuestion,
        setRequired,
        changeType,
        updateForm,
    } = formSlice.actions;

export default formSlice.reducer;
