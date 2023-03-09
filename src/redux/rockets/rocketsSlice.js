/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.spacexdata.com/v3/rockets';

const initialState = {
  rocketItems: [],
  isLoading: true,
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
