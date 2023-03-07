/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  rocketItems: [],
  isReserve: false,
};

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    reserveRocket: (state, action) => {
      console.log(state, action);
    },
  },
});

export const { reserveRocket } = rocketsSlice.actions;

export default rocketsSlice.reducer;
