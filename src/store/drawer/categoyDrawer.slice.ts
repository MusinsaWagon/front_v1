import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type CategoryDrawerState = {
  isDrawerOpen: boolean;
  categoryId: number;
  choicedIdx: number;
};
const initialState: CategoryDrawerState = {
  isDrawerOpen: false,
  categoryId: 0,
  choicedIdx: 0,
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
    setCategoryId: (state, action: PayloadAction<number>) => {
      state.categoryId = action.payload;
    },
    setChoicedIdx: (state, action: PayloadAction<number>) => {
      state.choicedIdx = action.payload;
    },
  },
});

export const { openDrawer, closeDrawer, setChoicedIdx, setCategoryId } =
  categoryDrawerSlice.actions;

export default categoryDrawerSlice.reducer;
