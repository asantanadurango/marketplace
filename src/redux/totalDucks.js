// TYPES
export const ADD_TO_TOTAL = 'ADD_TO_TOTAL';
export const SUBSTRACT_TO_TOTAL = 'SUBSTRACT_TO_TOTAL';

// ACTIONS
export const addToTotal = payload => ({ type: ADD_TO_TOTAL, payload });
export const substractToTotal = payload => ({ type: SUBSTRACT_TO_TOTAL, payload });

// STORE
const initalState = {
	total: 0,
};

// REDUCER
export const totalReducer = (state = initalState, action) => {
	const payload = action.payload;
	const type = action.type;
	switch (type) {
		case ADD_TO_TOTAL:
			return {
				...state,
				total: state.total + payload,
			};

		case SUBSTRACT_TO_TOTAL:
			return {
				...state,
				total: state.total - payload,
			};

		default:
			return state;
	}
};
