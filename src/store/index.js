import { createStore } from "redux"

// second concept - reducer function
const reducerCounter = (state={counter:0},action)=>{

    if (action.type==='increment'){

        return {counter:state.counter+1}
    }

    if (action.type==='decrement'){
        return {counter:state.counter-1}
    }

    if (action.type==='incrementByTwo'){
        return {
            counter:state.counter+2
        }
    }

    if (action.type==='decrementByTwo'){
        return {counter:state.counter-2}
    }

    return state
}


// first concept- store
const store = createStore(reducerCounter)



export default store



