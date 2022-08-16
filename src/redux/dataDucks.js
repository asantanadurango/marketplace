// TYPES
export const INITIAL_CALL_DATA = 'INITIAL_CALL_DATA';

// ACTIONS
export const initialCallData = payload => ({ type: INITIAL_CALL_DATA, payload });

// STORE
const initalState = {
	data: [],
};

// REDUCER
export const dataReducer = (state = initalState, action) => {
	const payload = action.payload;
	const type = action.type;
	switch (type) {
		case INITIAL_CALL_DATA:
			return {
				...state,
				data: payload,
			};

		default:
			return state;
	}
};
