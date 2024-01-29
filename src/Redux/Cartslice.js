import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    Cartitems: [],
    Quantity: 0,
    TotalPrice: 0,
};

const calculateTotalPrice = (cartItems) => {
    return cartItems.reduce((total, item) => total + item.Price * item.quantity, 0);
};

const Cartslice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.Cartitems.find(item => item.Id === newItem.Id);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                state.Cartitems.push({ ...newItem, quantity: 1 });
            }

            state.Quantity++;
            state.TotalPrice = calculateTotalPrice(state.Cartitems);
        },
        incrementQuantity: (state, action) => {
            const itemId = action.payload;
            const itemToIncrement = state.Cartitems.find(item => item.id === itemId);
            if (itemToIncrement) {
                itemToIncrement.quantity++;
                state.Quantity++;
                state.TotalPrice = calculateTotalPrice(state.Cartitems);
            }
        },
        decrementQuantity: (state, action) => {
            const itemId = action.payload;
            const itemToDecrement = state.Cartitems.find(item => item.id === itemId);
            if (itemToDecrement && itemToDecrement.quantity > 1) {
                itemToDecrement.quantity--;
                state.Quantity--;
                state.TotalPrice = calculateTotalPrice(state.Cartitems);
            }
        },
        removeItem: (state, action) => {
            const itemId = action.payload;
            const itemIndex = state.Cartitems.findIndex(item => item.id === itemId);
            if (itemIndex !== -1) {
                const removedItem = state.Cartitems.splice(itemIndex, 1)[0];
                state.Quantity -= removedItem.quantity;
                state.TotalPrice = calculateTotalPrice(state.Cartitems);
            }
        },
    },
});

export const cartActions = Cartslice.actions;
export default Cartslice;
