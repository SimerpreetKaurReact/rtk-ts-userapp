import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { cakeActions } from "../cake/cakeSlice";

interface InitialState {
  numOfChoco: number;
}
const initialState: InitialState = {
  numOfChoco: 12,
};
const chocolateSlice = createSlice({
  name: "choco",
  initialState,
  reducers: {
    chocoOrdered: (state, action: PayloadAction<number>) => {
      state.numOfChoco = state.numOfChoco - action.payload;
    },
    chocoRestocked: (state, action: PayloadAction<number>) => {
      state.numOfChoco = state.numOfChoco + action.payload;
    },
  },
  //   extraReducers: {
  //     //map with the action of other slice
  //     ["cake/cakeOrdered"]: (state) => {
  //       state.numOfChoco = state.numOfChoco - 1;
  //     },
  //   },
  extraReducers: (builder) => {
    builder.addCase(cakeActions.cakeOrdered, (state) => {
      state.numOfChoco = state.numOfChoco - 1;
    });
  },
});

export default chocolateSlice.reducer;
export const chocoActions = chocolateSlice.actions;
