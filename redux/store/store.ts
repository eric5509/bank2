import { configureStore } from '@reduxjs/toolkit'
import { UserDetailsSlice } from '../slices/user'
import { ModalSlice } from '../slices/modal'
import { BackDropSlice } from '../slices/backdrop'

export const store = configureStore({
    reducer: {
        userDetails: UserDetailsSlice.reducer,
        modal: ModalSlice.reducer,
        backdrop: BackDropSlice.reducer,
    }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch