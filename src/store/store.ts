import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './categories/categories.slice';
import signupReducer from './signup/signupSlice';
import categoryDrawerReducer from './drawer/categoyDrawer.slice';
export const store = configureStore({
  reducer: {
    categories: categoryReducer,
    signup: signupReducer,
    categoryDrawer: categoryDrawerReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

// RootState와 AppDispatch 타입 추출
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
