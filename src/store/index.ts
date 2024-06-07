import { configureStore } from '@reduxjs/toolkit'

import termoReducer from './reducers/vaga'

const store = configureStore({
  reducer: {
    termo: termoReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
export default store
