import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Tutor } from 'src/types'

import { SearchTutorRequestPayload, SearchTutorSuccessPayload } from './types'

export interface SearchState {
  result: Tutor[]
  fetching: boolean
}

const initialState: SearchState = {
  result: [],
  fetching: false,
}

export const tutorSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    searchTutorRequest: (
      state,
      action: PayloadAction<SearchTutorRequestPayload>,
    ) => {
      state.fetching = true
    },
    searchTutorSuccess: (
      state,
      action: PayloadAction<SearchTutorSuccessPayload>,
    ) => {
      state.fetching = false
      state.result = action.payload.tutors
    },
    searchTutorFail: (state) => {
      state.fetching = false
    },
  },
})

export const { searchTutorRequest, searchTutorSuccess, searchTutorFail } =
  tutorSlice.actions

export default tutorSlice.reducer
