/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.spacexdata.com/v3/rockets';

const initialState = {
  rocketItems: [],
  isReserve: false,
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
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRocketItems.fulfilled, (state, action) => {
        state.isLoading = false;
        const rocketsData = action.payload.map((item) => ({
          id: item.id,
          name: item.rocket_name,
          type: item.rocket_type,
          flickr_images: item.flickr_images,
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
