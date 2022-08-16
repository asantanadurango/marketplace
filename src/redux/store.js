import { combineReducers, createStore } from 'redux';

import { dataReducer } from './dataDucks';
import { filtersReducer } from './filtersDucks';
import { combosReducer } from './combosDucks';
import { keywordReducer } from './keywordDucks';
import { totalReducer } from './totalDucks';
import { cartReducer } from './cartDucks';

const reducers = combineReducers({
	dataReducer,
	filtersReducer,
	combosReducer,
	keywordReducer,
	totalReducer,
	cartReducer,
});

const store = createStore(reducers);

export default store;
