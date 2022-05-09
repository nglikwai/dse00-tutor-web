import { RootState } from 'src/redux/store'

export const searchResultSelector = (state: RootState) => state.search.result

export const isFetchingSelector = (state: RootState) => state.search.fetching
