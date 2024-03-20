import { createSlice } from '@reduxjs/toolkit';

const selectCategorySlice = createSlice({
  name: 'selectedCategory',
  initialState: 'Sweets',
  reducers: {
    selectCategory(state, action) {
      return action.payload; 
    },
  },
});

export const { selectCategory } = selectCategorySlice.actions;

export default selectCategorySlice;
