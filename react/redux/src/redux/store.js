import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "./counter.js"

export let store=configureStore({
    reducer:{
        counter:counterReducer
    }
})

