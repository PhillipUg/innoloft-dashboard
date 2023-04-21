import api from '../api';

export const fetchProduct = (productId) => api.get(`/product/${productId}/`);

export const updateProduct = (productId, data) => api.put(`/product/${productId}/`, data);
