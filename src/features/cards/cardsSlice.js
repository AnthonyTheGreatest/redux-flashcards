import { createSlice } from "@reduxjs/toolkit";

export const cardsSlice = createSlice({
    name: 'cards',
    initialState: {
        cards: JSON.parse(localStorage.getItem('cards')) || {}
    },
    reducers: {
        addCard: (state, {payload}) => {
            const {id, front, back} = payload;
            state.cards[id] = {id, front, back};
        }
    }
});

// You can use the following pattern to pass arguments to a selector:
// (used in Card component)
export const selectCardById = id => state => state.cards.cards[id];
export const selectAllCards = state => state.cards.cards;

export const {addCard} = cardsSlice.actions;
export default cardsSlice.reducer;
