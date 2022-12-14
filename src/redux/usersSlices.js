import {createSlice} from "@reduxjs/toolkit"

const userSlice = createSlice({
    name : "user",
    initialState : {
        currentUser : null,
        isAdmin : null
    },
    reducers : {
        loginStart: (state) => {},
        loginSuccess: (state, action, isAdmin) => {
            state.currentUser = action.payload // меняем старый стейт на новые данные из экшна
            state.isAdmin = action.payload.role == "admin"
        },
        loginFailure: (state) => {},
        logout : (state) => {
            state.currentUser = null  
            state.isAdmin = null
        }
    }
})

export const { loginStart, loginSuccess, loginFailure, logout } = userSlice.actions
export default userSlice.reducer