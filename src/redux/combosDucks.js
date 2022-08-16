// TYPES
export const ADD_TO_COMBOS = 'ADD_TO_COMBOS';

// ACTIONS
export const addToCombos = payload => ({ type: ADD_TO_COMBOS, payload });

// STORE
const initalState = {
	combos: [],
};

// REDUCER
export const combosReducer = (state = initalState, action) => {
	const payload = action.payload;
	const type = action.type;
	switch (type) {
		case ADD_TO_COMBOS:
			const existCombo = () => {
				const [self, match] = payload;
				if (!self || !match) return false;
				return self.name;
			};
			if (!existCombo()) return state;
			const existOnListCombos = () => {
				for (let idx = 0; idx < state.combos.length; idx++) {
					if (state.combos[idx][0].name === existCombo()) return true;
				}
				return false;
			};
			if (existOnListCombos()) {
				return state;
			} else {
				console.log([...state.combos, payload]);
				return {
					...state,
					combos: [...state.combos, payload],
				};
			}

		default:
			return state;
	}
};
