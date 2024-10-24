import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {},
});

// RootState와 AppDispatch 타입 추출
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
