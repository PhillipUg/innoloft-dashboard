import { createAsyncThunk } from '@reduxjs/toolkit';
import fetchTRL from '../../services/api/trl';

const getTRL = createAsyncThunk(
  'trl/fetchTRL',
  async () => {
    const response = await fetchTRL();
    return response.data;
  },
);

export default getTRL;
