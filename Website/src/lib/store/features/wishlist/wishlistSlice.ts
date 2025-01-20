import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WishListItem } from "@/lib/types";

interface InitialStateI {
    items: WishListItem[];
}

const loadWishlistFromLocalStorage = (): WishListItem[] => {
    try {
        const wishlistData = localStorage.getItem("wishlist");
        return wishlistData ? JSON.parse(wishlistData) : [];
    } catch (error) {
        console.error("Failed to load cart from localStorage:", error);
        return [];
    }
};

const saveWishlistToLocalStorage = (wishListItem: WishListItem[]) => {
    try {
        localStorage.setItem("wishlist", JSON.stringify(wishListItem));
    } catch (error) {
        console.error("Failed to save cart to localStorage:", error);
    }
};

const initialState: InitialStateI = {
    items: loadWishlistFromLocalStorage(), 
};

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
        addToWishlist: (state, action: PayloadAction<WishListItem>) => {
            const existingProduct = state.items.find(
                (item) =>
                    item.id === action.payload.id 
            );

            if (!existingProduct) {
                state.items.push(action.payload);   
                saveWishlistToLocalStorage(state.items); 
            }
        },
        removeFromWishlist: (state, action: PayloadAction<string>) => {
            const CartItemd = action.payload;
            state.items = state.items.filter((item) => item.id !== CartItemd);

            saveWishlistToLocalStorage(state.items); 
        },
        clearWishlist: (state) => {
            state.items = [];
            saveWishlistToLocalStorage(state.items); 
        },
    },
});

export const { addToWishlist, removeFromWishlist, clearWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
