import { createSlice } from '@reduxjs/toolkit';
import getTRL from '../actions/trlActions';

const trlSlice = createSlice({
  name: 'config',
  initialState: {
    data: null,
    status: 'idle',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTRL.pending, (state) => {
        return { ...state, status: 'loading' };
      })
      .addCase(getTRL.fulfilled, (state, action) => {
        return { ...state, status: 'succeded', data: action.payload };
      })
      .addCase(getTRL.rejected, (state) => {
        return { ...state, status: 'failed' };
      });
  },
});

export default trlSlice.reducer;
