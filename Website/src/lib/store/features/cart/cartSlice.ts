import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem } from "@/lib/types";

interface InitialStateI {
    items: CartItem[];
}

const loadCartFromLocalStorage = (): CartItem[] => {
    try {
        const cartData = localStorage.getItem("cart");
        return cartData ? JSON.parse(cartData) : [];
    } catch (error) {
        console.error("Failed to load cart from localStorage:", error);
        return [];
    }
};

const saveCartToLocalStorage = (cartItems: CartItem[]) => {
    try {
        localStorage.setItem("cart", JSON.stringify(cartItems));
    } catch (error) {
        console.error("Failed to save cart to localStorage:", error);
    }
};

const initialState: InitialStateI = {
    items: loadCartFromLocalStorage(), // Load cart data from localStorage on initialization
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartItem>) => {
            const existingProduct = state.items.find(
                (item) =>
                    item.id === action.payload.id &&
                    item.size === action.payload.size &&
                    item.color === action.payload.color
            );

            if (existingProduct) {
                existingProduct.quantity += action.payload.quantity;
            } else {
                state.items.push(action.payload);
            }

            saveCartToLocalStorage(state.items); 
        },
        removeFromCart: (state, action: PayloadAction<{ id: string; color: string; size: string }>) => {
            const { id, color, size } = action.payload;
            state.items = state.items.filter((item) => {
              return item.id !== id || item.color !== color || item.size !== size;
            });
          
            saveCartToLocalStorage(state.items);
          },
          
        updateQuantity: (
            state,
            action: PayloadAction<{ id: string; size: string; color: string; quantity: number }>
        ) => {
            const { id, size, color, quantity } = action.payload;

            const existingProduct = state.items.find(
                (item) => item.id === id && item.size === size && item.color === color
            );

            if (existingProduct && quantity > 0) {
                existingProduct.quantity = quantity;
            }

            saveCartToLocalStorage(state.items);
        },
        clearCart: (state) => {
            state.items = [];
            saveCartToLocalStorage(state.items);
        },
    },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
