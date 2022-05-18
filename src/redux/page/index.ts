import { createSlice } from '@reduxjs/toolkit'

export interface SearchState {
  open: boolean
  login: boolean
  loginPage: boolean
  confirmPage: boolean
}

const initialState: SearchState = {
  open: false,
  login: false,
  loginPage: false,
  confirmPage: false,
}

export const pageStatusSlice = createSlice({
  name: 'pageStatus',
  initialState,
  reducers: {
    toggleLoginButtonOpen: (state) => {
      state.open = !state.open
    },
    toggleLoginPageOpen: (state) => {
      state.loginPage = !state.loginPage
    },
    setLogin: (state) => {
      state.login = true
    },
    setLogout: (state) => {
      state.login = false
    },

    toggleConfirmPageOpen: (state) => {
      state.confirmPage = !state.confirmPage
    },
  },
})

export const {
  toggleLoginButtonOpen,
  setLogin,
  setLogout,
  toggleLoginPageOpen,
  toggleConfirmPageOpen,
} = pageStatusSlice.actions

export default pageStatusSlice.reducer
