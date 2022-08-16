const initialPrice = [
	{ tag: '< COP$100.000', between: 100_000 },
	{ tag: 'COP$100.000 - COP$1.000.000', between: [100_000, 1_000_000] },
	{ tag: 'COP$1.000.000 - COP$5.000.000', between: [1_000_000, 5_000_000] },
	{ tag: '> COP5.000.000', between: 5_000_000 },
];
const filterByPrice = ({ priceTag, data }) => {
	if (initialPrice[0].tag === priceTag) {
		return data.filter(p => p.price < initialPrice[0].between);
	} else if (initialPrice[initialPrice.length - 1].tag === priceTag) {
		return data.filter(p => p.price > initialPrice[initialPrice.length - 1].between);
	} else {
		for (let idx = 1; idx < initialPrice.length - 1; idx++) {
			const obj = initialPrice[idx];
			const greaterThan = obj.between[0];
			const lessThan = obj.between[1];

			if (obj.tag === priceTag) {
				return data.filter(p => p.price >= greaterThan && p.price <= lessThan);
			}
		}
		return [];
	}
};

function filterProductsForState({ selectFilters, data }) {
	const returnFilterProdus = {
		price: filter => (!filter || data.length === 0 ? [] : [filterByPrice({ priceTag: filter, data })]),
		brand: filter => (!filter || data.length === 0 ? [] : [data.filter(p => p.brand.toLowerCase().trim() === filter.toLowerCase())]),
		category: filter =>
			!filter || data.length === 0 ? [] : [data.filter(p => p.category.toLowerCase().trim() === filter.toLowerCase())],
	};

	const byAndSelectedfilters = Object.entries(selectFilters);
	const result = byAndSelectedfilters
		.map(([key, value]) => returnFilterProdus[key](value, data))
		.flat()
		.filter(e => e.length && Array.isArray(e));
	return result;
}

const toUniArray = arrs => {
	const arrProcess = arrs.flat();
	const idsReduce = arrProcess.reduce((acc, current) => {
		return [current.id] in acc ? { ...acc, [current.id]: acc[current.id] + 1 } : { ...acc, [current.id]: 1 };
	}, []);

	const keysAndValuesIdsReduce = Object.entries(idsReduce);

	let res = [];
	keysAndValuesIdsReduce.forEach(([key, value]) => {
		arrProcess.forEach(e => {
			if (e.id === Number(key) && value === arrs.length) {
				res = res.concat(e);
			}
		});
	});

	return res.reduce((acc, current) => {
		const ids = acc.map(e => e?.id);
		return !ids.includes(current.id) ? [...acc, current] : acc;
	}, []);
};

// TYPES
export const INITIAL_CALL_FILTERS = '  INITIAL_CALL_FILTERS';
export const SELECT_FILTER = 'SELECT_FILTER';
export const FILTER_PRODUCTS = 'FILTER_PRODUCTS';
export const SET_FILTERED_PRODUCTS_BY_SEARCHBAR = 'SET_FILTERED_PRODUCTS_BY_SEARCHBAR';
export const RESET_FILTERS = '  RESET_FILTERS';

// ACTIONS
export const initialCallFilters = payload => ({
	type: INITIAL_CALL_FILTERS,
	payload,
});
export const selectFilter = payload => ({ type: SELECT_FILTER, payload });
export const filterProducts = payload => ({ type: FILTER_PRODUCTS, payload });
export const setFilterProductsBySearchbar = payload => ({ type: SET_FILTERED_PRODUCTS_BY_SEARCHBAR, payload });
export const resetFilters = payload => ({ type: RESET_FILTERS, payload });

// STORE
const initialSelectFilters = { price: '', category: '', brand: '' };
const initialPriceTags = initialPrice.map(obj => obj.tag);
const initalState = {
	filterTags: {},
	selectedFilters: {},
	filteredProducts: [],
};

// REDUCER
export const filtersReducer = (state = initalState, action) => {
	const payload = action.payload;
	const type = action.type;
	switch (type) {
		case INITIAL_CALL_FILTERS:
			const initialCategoryTags = [...new Set(payload.map(p => p.category))];
			const initialBrandTags = [...new Set(payload.map(p => p.brand))];
			return {
				...state,
				filterTags: {
					price: initialPriceTags,
					category: initialCategoryTags,
					brand: initialBrandTags,
				},
				selectedFilters: initialSelectFilters,
				filteredProducts: payload,
			};

		case SELECT_FILTER:
			return {
				...state,
				selectedFilters: {
					...state.selectedFilters,
					[payload.by]: payload.selected,
				},
			};

		case RESET_FILTERS:
			return {
				...state,
				// selectedFilters: initialSelectFilters,
				filteredProducts: payload,
			};

		case FILTER_PRODUCTS:
			const argumentsForFilterProducts = {
				selectFilters: state.selectedFilters,
				data: payload.data,
			};

			const forToUniqueArray = filterProductsForState(argumentsForFilterProducts);
			const result = toUniArray(forToUniqueArray);

			return { ...state, filteredProducts: result };

		case SET_FILTERED_PRODUCTS_BY_SEARCHBAR:
			return { ...state, filteredProducts: payload };
		default:
			return state;
	}
};
