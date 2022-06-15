import { createSlice } from "@reduxjs/toolkit";
const initialState = [
  { id: "b4b1ecd3-7a3a-49d7-abc8-4a4b449a6dd8", content: "First task" },
  { id: "bc60367d-905d-45e5-b3cd-3ac74044318b", content: "Second task" },
  { id: "107f5dd5-b8ed-4cd4-bdda-684c0b49cf68", content: "Third task" },
  { id: "9702e110-2b6e-4f85-8472-933e322f64ed", content: "Fourth task" },
  { id: "ce7adaed-a2fc-42ae-8dc4-2947ea00ab05", content: "Fifth task" },
];
export const cardsSlice = createSlice({
  name: "cards",
  initialState,

  reducers: {
    increment: (state) => console.log("increment"),
    filter: (state, action) =>
      state.filter((card) => card.content.includes(action.payload)),
    add: (state, action) => [...state, action.payload],
    setCard: (state, action) => [...action.payload],
  },
});

export const { increment, filter, add, setCard } = cardsSlice.actions;
export const selectCard = (state) => state;
export default cardsSlice.reducer;
