import { configureStore } from "@reduxjs/toolkit";

import chocoReducer, {
  chocoActions,
} from "../features/chocolate/chocolateSlice";
import cakeReducer, { cakeActions } from "../features/cake/cakeSlice";

import userReducer, { fetchUsers } from "../features/user/userSlice";
// const logger = reduxLogger.createLogger();
const store = configureStore({
  reducer: {
    cake: cakeReducer,
    choco: chocoReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
console.log("initialState", store.getState());
const unsubscribe = store.subscribe(() => {
  // console.log("initialState", store.getState());
});
export default store;
//store.dispatch(cakeActions.cakeOrdered(2));
// store.dispatch(cakeActions.cakeOrdered(2));
// store.dispatch(cakeActions.cakeRestoked(2));
// store.dispatch(chocoActions.chocoRestocked(2));
// store.dispatch(fetchUsers());
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
