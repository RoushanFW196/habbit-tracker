import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchHabits, addHabit, markComplete } from '../utils/api';

export const loadHabits = createAsyncThunk('habits/loadHabits', async () => {
  const response = await fetchHabits();
  return response.data;
});

const habitsSlice = createSlice({
  name: 'habits',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadHabits.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default habitsSlice.reducer;
