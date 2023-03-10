import { configureStore } from '@reduxjs/toolkit';
import { missionsSlice } from './missions/missionsSlice';
import rocketsReducer from './rockets/rocketsSlice';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
    missions: missionsSlice.reducer,
  },
});

export default store;
