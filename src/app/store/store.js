import { configureStore } from '@reduxjs/toolkit';
import exampleReducer from '../reducer/exampleReducer';

export const store = configureStore({
  reducer: {
    example: exampleReducer,
  },
});
