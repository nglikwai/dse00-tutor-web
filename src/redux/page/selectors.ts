import { RootState } from 'src/redux/store'

export const toggleOpenPageSelector = (state: RootState) => state.pageStatus
