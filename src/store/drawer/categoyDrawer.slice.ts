import { createSlice } from '@reduxjs/toolkit';

type CategoryDrawerState = {
  isDrawerOpen: boolean;
};
const initialState: CategoryDrawerState = {
  isDrawerOpen: false,
};
const categoryDrawerSlice = createSlice({
  name: 'categoryDrawer',
  initialState,
  reducers: {
    openDrawer: (state) => {
      state.isDrawerOpen = true;
    },
    closeDrawer: (state) => {
      state.isDrawerOpen = false;
    },
  },
});

export const { openDrawer, closeDrawer } = categoryDrawerSlice.actions;

export default categoryDrawerSlice.reducer;
