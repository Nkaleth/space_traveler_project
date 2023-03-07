import { configureStore } from '@reduxjs/toolkit';
import { missionsSlice } from './missionsSlice';
import rocketsReducer from './rockets/rocketsSlice';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
    missions: missionsSlice.reducer,
  },
});

export default store;
