/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.spacexdata.com/v3/rockets';

const initialState = {
  rocketItems: [],
  isReserve: false,
};

export const getRocketItems = createAsyncThunk('rockets/getRocketItems', async () => {
  try {
    const resp = await axios.get(url);
    return resp.data;
  } catch (error) {
    return error.message;
  }
});

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
