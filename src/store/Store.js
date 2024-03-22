import { configureStore } from "@reduxjs/toolkit";
import userValue from "../slices/slices";
import CartSlice from "../slices/cardSlice";

export const Store = configureStore({
    reducer:{
        userData:userValue,
        cartData:CartSlice
    }
}) 