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
  reducers: {
    reserveMission: (state, action) => {
      const missionId = action.payload;
      const updatedMissions = state.missions.map((mission) => (mission.mission_id === missionId
        ? { ...mission, reserved: true }
        : mission));
      return {
        ...state,
        missions: updatedMissions,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMissions.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(fetchMissions.fulfilled, (state, action) => {
        const missions = action.payload.data.map((mission) => ({
          mission_id: mission.mission_id,
          mission_name: mission.mission_name,
          description: mission.description,
        }));
        return {
          ...state,
          status: 'succeeded',
          missions,
        };
      })
      .addCase(fetchMissions.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        missions: action.error.message,
      }));
  },
});

export { missionsSlice, fetchMissions };
export const { reserveMission } = missionsSlice.actions;
