import { createStore } from 'redux';
import { ADDTOTAL, SUBTRACTTOTAL, ADDTOCART, REMOVETOCART, FILTERPRODUCTS, SETLISTFILTER, CALLDATA, SETKEYWORD, ADDTOLISTCOMBOS } from './actions';

const listCategories = [{ title: 'Todos', categorys: ['<=COP$100', 'COP$100 - COP$10.000', 'COP$10.000 - COP$10.0000', '>=COP100.000'] }];

const initialStore = {
	categorys: [],
	brands: [],
	data: [],
	cart: [],
	listCategories: [],
	dataForShow: [],
	listCombos: [],
	listFilters: { category: '', brand: '' },
	total: 0,
	keyword: '',
};

const REDUCER = (state = initialStore, action) => {
	switch (action.type) {
		case CALLDATA:
			const categorys = [...new Set(action.payload.map(p => p.category))];
			const brands = [...new Set(action.payload.map(p => p.brand))];

			return {
				...state,
				data: action.payload,
				categorys,
				listCategories: [...listCategories, { title: 'Categorias', categorys }, { title: 'Marcas', categorys: brands }],
				dataForShow: action.payload,
			};

		case SETLISTFILTER:
			console.log(action.payload);
			if (!action.payload)
				return {
					...state,
					listFilters: { category: '', brand: '' },
				};
			let newFilter = {};
			if (action.payload === 'Categorias') newFilter = { ...state.listFilters, category: '' };
			if (action.payload === 'Marcas') newFilter = { ...state.listFilters, brand: '' };
			if (state.data.some(e => e.brand === action.payload)) newFilter = { ...state.listFilters, brand: action.payload };
			if (state.data.some(e => e.category === action.payload)) newFilter = { ...state.listFilters, category: action.payload };

			return {
				...state,
				listFilters: newFilter,
			};
		case FILTERPRODUCTS:
			const arrFinal = () => {
				let result = [];
				console.log(state.listFilters);
				if (state.listFilters.category && state.listFilters.brand) {
					result = state.data.filter(
						e => e.category === state.listFilters.category && e.brand === state.listFilters.brand
					);
				} else if (state.listFilters.category) {
					result = state.data.filter(e => e.category === state.listFilters.category);
				} else if (state.listFilters.brand) {
					result = state.data.filter(e => e.brand === state.listFilters.brand);
				} else {
					result = state.data;
				}

				return [...new Set(result)];
			};
			return {
				...state,
				dataForShow: arrFinal(),
			};

		case SETKEYWORD:
			console.log(action.payload);
			return {
				...state,
				keyword: action.payload,
			};

		case ADDTOCART:
			let itemToCart = [];

			if (state.cart.length === 0) {
				itemToCart = itemToCart.concat([action.payload]);
			} else if (state.cart.every(e => e.name !== action.payload.name)) {
				itemToCart = itemToCart.concat([...state.cart, action.payload]);
			} else {
				itemToCart = itemToCart.concat(state.cart);
			}
			return {
				...state,
				cart: [...new Set(itemToCart)],
			};

		case REMOVETOCART:
			console.log(action.payload);
			const newCart = state.cart.filter(e => e.name !== action.payload);
			console.log(newCart);

			return {
				...state,
				cart: newCart,
			};

		case ADDTOTAL:
			const newAdd = state.total + action.payload;

			return {
				...state,
				total: newAdd,
			};
		case SUBTRACTTOTAL:
			const newSubtract = state.total - action.payload;

			return {
				...state,
				total: newSubtract,
			};

		case ADDTOLISTCOMBOS:
			const existCombo = () => {
				const [self, match] = action.payload;
				if (!self || !match) return false;
				return self.name;
			};
			if (!existCombo()) return state;
			const existOnListCombos = () => {
				for (let idx = 0; idx < state.listCombos.length; idx++) {
					if (state.listCombos[idx][0].name === existCombo()) return true;
				}
				return false;
			};
			if (existOnListCombos()) {
				return state;
			} else {
				console.log([...state.listCombos, action.payload]);
				return {
					...state,
					listCombos: [...state.listCombos, action.payload],
				};
			}

		default:
			return state;
	}
};

export default createStore(REDUCER);
