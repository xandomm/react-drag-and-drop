import { configureStore } from "@reduxjs/toolkit";

import cardsReducer from "./cardSlice";

export const store = configureStore({
  reducer: {
    cards: cardsReducer,
  },
});
