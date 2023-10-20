import { createSlice } from "@reduxjs/toolkit";

export const cardsSlice = createSlice({
    name: 'cards',
    initialState: {
        cards: {}
    },
    reducers: {
        addCard: (state, {payload}) => {
            const {id, front, back} = payload;
            state.cards[id] = {id, front, back};
        }
    }
});

// You can use the following pattern to pass arguments to a selector:
export const selectCardById = id => state => state.cards.cards[id];

export const {addCard} = cardsSlice.actions;
export default cardsSlice.reducer;
