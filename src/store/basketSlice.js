import { createSlice } from '@reduxjs/toolkit'

const basketSlice = createSlice({
    name: 'basket',
    initialState: {
        items: [],
    },
    reducers: {
        addProduct: (state, action) => {
            const addedProduct = {
                id: action.payload.id,
                title: action.payload.title,
                price: action.payload.price,
                picture: action.payload.picture,
            }
            state.items.push(addedProduct)
        },
    },
})

export const basketReducer = basketSlice.reducer
export const { addProduct } = basketSlice.actions
