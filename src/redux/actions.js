import { initialCallFilters, selectFilter, filterProducts, setFilterProductsBySearchbar, resetFilters } from './filtersDucks';
import { addToCombos } from './combosDucks';
import { setKeyword } from './keywordDucks';
import { addToTotal, substractToTotal } from './totalDucks';
import { addToCart, removeToCart } from './cartDucks';
import { initialCallData } from './dataDucks';

export {
	initialCallData,
	initialCallFilters,
	selectFilter,
	setFilterProductsBySearchbar,
	resetFilters,
	filterProducts,
	addToCombos,
	setKeyword,
	addToTotal,
	substractToTotal,
	addToCart,
	removeToCart,
};
