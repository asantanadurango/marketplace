import { connect } from 'react-redux';
import { useEffect } from 'react';
import initialCalled from './Helpers/initialCalled';
import NavBar from './components/NavBar/NavBar';
import Spinner from './components/Spinner/Spinner';
import CartHome from './pages/CartHome/CartHome';
import CategoryHome from './pages/MainHome/MainHome';
import './App.css';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import BtnGoTo from './components/BtnGoTo/BtnGoTo';
import NotFound from './pages/NotFound/NotFound';

function App({ dataForShow = [], data = [], cart = [], callData, handleAddToCart, setListFilter, setKeyWord, keyword }) {
	useEffect(() => {
		initialCalled(callData);
	}, []);
	const URLPATH = useLocation().pathname;
	const outHome = URLPATH === '/' ? false : true;
	// console.log(URLPATH);
	return (
		<div className='app-container'>
			<NavBar outHome={outHome} />
			<Routes>
				<Route
					path='/'
					element={
						<>
							{data.length === 0 ? (
								<Spinner animation={'border'} color={'light'} />
							) : dataForShow.length === 0 ? (
								<NotFound />
							) : (
								<CategoryHome
									dataForShow={dataForShow}
									data={data}
									cart={cart}
									addToCart={handleAddToCart}
									setKeyWord={setKeyWord}
									keyword={keyword}
									setListFilter={setListFilter}
								/>
							)}
							{cart.length > 0 && <BtnGoTo to='/cart' text={'Go to Cart'} />}
						</>
					}
				/>
				<Route path='/cart' element={cart.length > 0 ? <CartHome data={cart} /> : <Navigate to='/' />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</div>
	);
}

const mapStateToProps = state => ({
	dataForShow: state.dataForShow,
	cart: state.cart,
	data: state.data,
	keyword: state.keyword,
});

const mapDispatchToProps = dispatch => ({
	callData(payload) {
		dispatch({
			type: 'CALLDATA',
			payload,
		});
	},
	handleAddToCart(payload) {
		dispatch({
			type: 'ADDTOCART',
			payload,
		});
	},

	setKeyWord(payload) {
		dispatch({
			type: 'SETKEYWORD',
			payload,
		});
	},
	setListFilter(payload) {
		dispatch({
			type: 'SETLISTFILTER',
			payload,
		});
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

{
	{
		/* <Route
					path='/'
					element={
						data.length === 0 ? (
							<Spinner animation={'border'} color={'light'} />
						) : dataForShow.length === 0 ? (
							<h1>No hay coincidencias</h1>
						) : (
							<CategoryHome dataForShow={dataForShow} cart={cart} addToCart={handleAddToCart} />
						)
					}
				/>
				<Route
					path={`/cart`}
					element={
						cart.length > 0 ? <CartHome data={cart} removeItemToCart={handleDeleteToCart} /> : <Navigate to='/' />
					}
				/>
				{cart.length > 0 && <BtnGoToCart />} */
	}

	/* <Routes>
				<Route
					path='/'
					element={
						data.length === 0 ? (
							<Spinner animation={'border'} color={'light'} />
						) : (
							<CategoryHome data={data} cart={cart} addToCart={handleAddToCart} />
						)
					}
				/>
				<Route path={`/:query`} element={<CategoryHome data={data} cart={cart} addToCart={handleAddToCart} />} />
				<Route
					path={`/cart`}
					element={
						cart.length > 0 ? <CartHome data={cart} removeItemToCart={handleDeleteToCart} /> : <Navigate to='/' />
					}
				/>
			</Routes>

				{data.length === 0 ? (
				<Spinner animation={'border'} color={'light'} />
			) : dataForShow.length === 0 ? (
				<h1>No hay coincidencias</h1>
			) : (
				<CategoryHome dataForShow={dataForShow} cart={cart} addToCart={handleAddToCart} />
			)} */
}
