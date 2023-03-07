import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchMissions = createAsyncThunk(
  'missions/fetchMissions',
  async () => {
    const response = await axios.get('https://api.spacexdata.com/v3/missions');
    return response;
  },
);

const missionsSlice = createSlice({
  name: 'missions',
  initialState: {
    missions: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMissions.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(fetchMissions.fulfilled, (state, action) => ({
        ...state,
        status: 'succeeded',
        missions: action.payload,
      }))
      .addCase(fetchMissions.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        missions: action.error.message,
      }));
  },
});

export { missionsSlice, fetchMissions };
