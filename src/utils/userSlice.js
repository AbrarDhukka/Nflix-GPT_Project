import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState:{
        userData:null,
    },
    reducers:{
        // addUser:(state, action)=>{
        //     return action.payload;
        // },

        // removeUser: (state, action)=>{
        //     return null;
        // }

        addUser: (state, action) => {
            return {
                ...state,
                userData: action.payload,
            };
        },

        removeUser: (state, action) => {
            return {
                ...state,
                userData: null, // Set userData to null to remove it
            };
        },
    }
})

export const {addUser, removeUser}=userSlice.actions;
export default userSlice.reducer;