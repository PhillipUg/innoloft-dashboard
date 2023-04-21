import { createAsyncThunk } from '@reduxjs/toolkit';
import fetchConfiguration from '../../services/api/configurations';

const getConfiguration = createAsyncThunk(
  'config/fetchConfiguration',
  async () => {
    const appId = process.env.REACT_APP_APP_ID || 1;
    const response = await fetchConfiguration(appId);
    return response.data;
  },
);

export default getConfiguration;
