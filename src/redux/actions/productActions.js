import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchProduct, updateProduct } from '../../services/api/product';

export const getProduct = createAsyncThunk(
  'product/fetchProduct',
  async (productId) => {
    const response = await fetchProduct(productId);
    return response.data;
  },
);

export const editProduct = createAsyncThunk(
  'product/updateProduct',
  async (productId, productData) => {
    const response = await updateProduct(productId, productData);
    // eslint-disable-next-line
    console.log('product update response: ', response.data);
    return response.data;
  },
);
