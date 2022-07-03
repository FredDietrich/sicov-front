import { createSlice } from '@reduxjs/toolkit'

export const vaccinesSlice = createSlice({
  name: 'vaccines',
  initialState: {
    vaccines: []
  },
  reducers: {
    insertVaccines: (state, action) => {
      state.vaccines = action.payload
    },
    clearVaccines: (state) => {
      state.vaccines = []
    }
  }
})

export const { insertVaccines } = vaccinesSlice.actions

export default vaccinesSlice.reducer
