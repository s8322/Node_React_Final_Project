import { createSlice } from '@reduxjs/toolkit'
const i={
token:null,
user:{},
roles:""
}
const tokenSlice = createSlice({
    name: 'token',
    initialState: i,
    reducers: {
        setToken(state, action) {
            state.token = action.payload
            
        },
        setUser(state, action) {
            state.user = action.payload
            
        },
        setRoles(state, action) {
            state.roles = action.payload
            
        },
        logOut(state, action) {
            state.token = null;
            state.roles=null;
            state.user=null;
        }
    }
})

export const { setToken, logOut,setUser,setRoles } = tokenSlice.actions
export default tokenSlice.reducer