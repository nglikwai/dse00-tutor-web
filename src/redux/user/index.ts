import { createSlice } from '@reduxjs/toolkit'

export interface SearchState {
  reserveNumber: number[]
}

const initialState: SearchState = {
  reserveNumber: [],
}

export const userSlice = createSlice({
  name: 'pageStatus',
  initialState,
  reducers: {
    confirmReserve: (state, action) => {
      state.reserveNumber = [...state.reserveNumber, action.payload]
    },
  },
})

export const { confirmReserve } = userSlice.actions

export default userSlice.reducer
