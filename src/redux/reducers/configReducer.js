import { createSlice } from '@reduxjs/toolkit';
import getConfiguration from '../actions/configActions';

const configSlice = createSlice({
  name: 'config',
  initialState: {
    data: null,
    status: 'idle',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getConfiguration.pending, (state) => {
        return { ...state, status: 'loading' };
      })
      .addCase(getConfiguration.fulfilled, (state, action) => {
        return { ...state, status: 'succeded', data: action.payload };
      })
      .addCase(getConfiguration.rejected, (state) => {
        return { ...state, status: 'failed' };
      });
  },
});

export default configSlice.reducer;
