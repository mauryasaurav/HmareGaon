import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'product_request',
  initialState: {
    products: null,
    loading: false,
    error: null,
  },
  reducers: {
    productRequest: state => {
      state.loading = true;
      state.error = null;
    },
    productSuccess: (state, action) => {
      state.loading = false;
      state.products = action.payload;
    },
    productFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { productRequest, productSuccess, productFailure } =
  productSlice.actions;
export default productSlice.reducer;
