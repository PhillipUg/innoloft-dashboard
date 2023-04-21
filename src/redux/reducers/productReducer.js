import { createSlice } from '@reduxjs/toolkit';
import { getProduct, editProduct } from '../actions/productActions';

const productSlice = createSlice({
  name: 'product',
  initialState: {
    loading: false,
    data: {},
    error: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProduct.pending, (state) => {
        return { ...state, loading: true };
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        return { loading: false, data: action.payload, error: '' };
      })
      .addCase(getProduct.rejected, (state, action) => {
        return { loading: false, data: {}, error: action.payload };
      })
      .addCase(editProduct.pending, (state) => {
        return { ...state, loading: true };
      })
      .addCase(editProduct.fulfilled, (state, action) => {
        return { loading: false, data: action.payload, error: '' };
      })
      .addCase(editProduct.rejected, (state, action) => {
        return { loading: false, data: {}, error: action.payload };
      });
  },
});

export default productSlice.reducer;
