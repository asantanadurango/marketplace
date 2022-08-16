// TYPES
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_TO_CART = 'REMOVE_TO_CART';

// ACTIONS
export const addToCart = payload => ({ type: ADD_TO_CART, payload });
export const removeToCart = payload => ({ type: REMOVE_TO_CART, payload });

// STORE
const initalState = {
	cart: [],
};

// REDUCER
export const cartReducer = (state = initalState, action) => {
	const payload = action.payload;
	const type = action.type;
	switch (type) {
		case ADD_TO_CART:
			let itemToCart = [];
			if (state.cart.length === 0) {
				itemToCart = itemToCart.concat([payload]);
			} else if (state.cart.every(e => e.name !== payload.name)) {
				itemToCart = itemToCart.concat([...state.cart, payload]);
			} else {
				itemToCart = itemToCart.concat(state.cart);
			}
			return {
				...state,
				cart: [...new Set(itemToCart)],
			};

		case REMOVE_TO_CART:
			const newCart = state.cart.filter(e => e.name !== payload);

			return {
				...state,
				cart: newCart,
			};

		default:
			return state;
	}
};
