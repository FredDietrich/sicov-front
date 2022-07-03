import { configureStore } from '@reduxjs/toolkit';
import criteriaReducer from '../reducer/criteriaReducer';
import vaccinesReducer from '../reducer/vaccinesReducer';

export const store = configureStore({
  reducer: {
    criteria: criteriaReducer,
    vaccines: vaccinesReducer
  },
});
