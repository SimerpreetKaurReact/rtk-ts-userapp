import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  numOfCakes: number;
}
const initialState: InitialState = {
  numOfCakes: 20,
};
const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    cakeOrdered: (state, action: PayloadAction<number>) => {
      state.numOfCakes = state.numOfCakes - action.payload;
    },
    cakeRestoked: (state, action: PayloadAction<number>) => {
      state.numOfCakes = state.numOfCakes + action.payload;
    },
  },
});

export default cakeSlice.reducer;
export const cakeActions = cakeSlice.actions;
