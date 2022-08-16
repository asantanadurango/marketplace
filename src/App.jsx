import { useEffect } from 'react';

// COKPONENTS
import NavBar from './components/NavBar/NavBar';
import Spinner from './components/Spinner/Spinner';
import MainHome from './pages/MainHome/MainHome';
// import CartHome from './pages/CartHome/CartHome';
// import CategoryHome from './pages/MainHome/MainHome';
import BtnGoTo from './components/BtnGoTo/BtnGoTo';

//REACT-ROUTER-DOM
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import NotFound from './pages/NotFound/NotFound';

// REACT-REDUX
import { useDispatch, useSelector } from 'react-redux/es/exports';

// ACTIONS
import { initialCallData, initialCallFilters, setKeyword } from './redux/actions';

//STYLES
import './App.css';

// SERVICES
import getAllData from './services/getAllData';
import CartHome from './pages/CartHome/CartHome';

const App = () => {
	// STORE
	const data = useSelector(state => state.dataReducer.data);
	const filteredProducts = useSelector(state => state.filtersReducer.filteredProducts);
	const cart = useSelector(state => state.cartReducer.cart);
	const keyword = useSelector(state => state.keywordReducer.keyword);
	const filterTags = useSelector(state => state.filtersReducer.filterTags);

	// DISPATCH
	const dispatch = useDispatch();

	// USEEFECT
	useEffect(() => {
		getAllData().then(data => dispatch(initialCallData(data)));
		getAllData().then(data => dispatch(initialCallFilters(data)));
	}, []);

	const URLPATH = useLocation().pathname;
	const intoHome = URLPATH === '/' ? true : false;

	return (
		<div className='app-container'>
			<NavBar intoHome={intoHome} />
			<Routes>
				<Route
					path='/'
					element={
						<>
							{data.length === 0 ? <Spinner animation={'border'} color={'light'} /> : <MainHome />}
							{cart.length > 0 && <BtnGoTo to='/cart' text={'Go to Cart'} />}
						</>
					}
				/>
				<Route path='/cart' element={cart.length > 0 ? <CartHome /> : <Navigate to='/' />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</div>
	);
};

export default App;
