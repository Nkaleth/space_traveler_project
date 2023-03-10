/* eslint-disable no-param-reassign */
import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  rocketItems: [],
  isLoading: true,
};

export const getRocketItems = createAsyncThunk(
  'rockets/getRocketItems',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('https://api.spacexdata.com/v3/rockets');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Error...');
    }
  },
);

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    reserveRocket: (state, action) => {
      const newRocketItems = state.rocketItems.map((item) => {
        if (item.id !== action.payload) { return item; }
        if (item.reserved === true) {
          return { ...item, reserved: false };
        }
        return { ...item, reserved: true };
      });
      state.rocketItems = newRocketItems;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRocketItems.fulfilled, (state, action) => {
        state.isLoading = false;
        const rocketsData = action.payload.map((item) => ({
          id: item.id,
          name: item.rocket_name,
          type: item.rocket_type,
          description: item.description,
          flickr_images: item.flickr_images,
          reserved: false,
        }));
        state.rocketItems = rocketsData;
      })
      .addCase(getRocketItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getRocketItems.rejected, (state, action) => {
        state.rocketItems = action.payload;
        state.error = action.error.message;
      });
  },
});

export const { reserveRocket } = rocketsSlice.actions;

export default rocketsSlice.reducer;
