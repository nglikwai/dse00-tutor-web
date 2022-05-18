import { createSlice } from '@reduxjs/toolkit'

export interface SearchState {
  open: boolean
}

const initialState: SearchState = {
  open: false,
}

export const pageStatusSlice = createSlice({
  name: 'pageStatus',
  initialState,
  reducers: {
    toggleLoginButtonOpen: (state) => {
      state.open = !state.open
    },
  },
})

export const { toggleLoginButtonOpen } = pageStatusSlice.actions

export default pageStatusSlice.reducer
