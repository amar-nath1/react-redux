import { createStore } from "redux"
import {configureStore, createSlice} from '@reduxjs/toolkit'


const counterSlice= createSlice({
    name:'counter',
    initialState:{counter:0,showCounter:true},
    reducers: {

        increment(state,action){
           state.counter= state.counter+action.payload;
        },
        decrement(state,action){
            state.counter= state.counter-action.payload;
        },
        toggleCounter(state){

            state.showCounter=!state.showCounter
        }
    }
})

// slice for auth
const authSlice=createSlice({
    name:'authentication',
    initialState:{authenticated:false},
    reducers:{
        login(state){
            state.authenticated=true
        },
        
        logout(state){
            state.authenticated=false
        }
    }
})


// first concept- store
const store = configureStore({
    reducer: {counter: counterSlice.reducer, auth:authSlice.reducer}
})

export const counterActions=counterSlice.actions
export const authActions=authSlice.actions

export default store



