import { createSlice } from '@reduxjs/toolkit'

export const criteriaSlice = createSlice({
  name: 'criteria',
  initialState: {},
  reducers: {
    addCriteria: (state, action) => {
      state.criteria = action.payload
    },
    clearCriteria: (state) => {
      state.criteria = {}
    }
  }
})

export const { addCriteria } = criteriaSlice.actions

export default criteriaSlice.reducer
