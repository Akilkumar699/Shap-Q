import { createSlice } from "@reduxjs/toolkit"

const initialState ={
    user:null,
}
const userSlice = createSlice(
    {
        name:'user',
        initialState,
        reducers:{
            setUsers:(state,action)=>{
                state.user=action.payload
            },
            removeUsers:(state)=>{
                state.user=null
            }
        }
    }
)

export const { setUsers, removeUsers } = userSlice.actions

const userValue = userSlice.reducer

export default userValue
