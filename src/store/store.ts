import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './categories/categories.slice';
export const store = configureStore({
  reducer: {
    categories: categoryReducer,
  },
});

// RootState와 AppDispatch 타입 추출
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
