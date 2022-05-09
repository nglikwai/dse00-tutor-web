import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from 'src/redux/rootSaga'
import searchReducer from 'src/redux/search'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    search: searchReducer,
  },
  middleware: [sagaMiddleware],
})

sagaMiddleware.run(rootSaga)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
