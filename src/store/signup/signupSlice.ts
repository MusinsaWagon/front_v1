import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SignupState {
  validateCode: number | null;
}

const initialState: SignupState = {
  validateCode: null,
};

const signupSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: {
    setCode: (state, action: PayloadAction<number>) => {
      state.validateCode = action.payload;
    },
  },
});

export const { setCode } = signupSlice.actions;
export default signupSlice.reducer;
