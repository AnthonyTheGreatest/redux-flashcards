import { createSlice } from "@reduxjs/toolkit";
import { addQuiz } from "../quizzes/quizzesSlice";

export const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topics: {}
    },
    reducers: {
        addTopic: (state, {payload}) => {
            const {id, name, icon} = payload;
            state.topics[id] = {id, name, icon, quizIds: []};
        }
    },
    extraReducers: (builder) => {
        builder.addCase(addQuiz, (state, {payload}) => {
            const {id, topicId} = payload;
            state.topics[topicId].quizIds.push(id);
        })
        // Adds quiz id to topics state slice when adding a new quiz.
    }
});

export const selectAllTopics = state => state.topics.topics; // central state/ slice name/ property name in slice

export const {addTopic} = topicsSlice.actions;
export default topicsSlice.reducer;
