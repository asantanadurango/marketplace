// TYPES
export const SET_KEYWORD = 'SET_KEYWORD';

// ACTIONS
export const setKeyword = payload => ({ type: SET_KEYWORD, payload });

// STORE
const initalState = {
	keyword: '',
};

// REDUCER
export const keywordReducer = (state = initalState, action) => {
	const payload = action.payload;
	const type = action.type;
	switch (type) {
		case SET_KEYWORD:
			return {
				...state,
				keyword: payload,
			};

		default:
			return state;
	}
};
