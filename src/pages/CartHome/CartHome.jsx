import { Container } from 'react-bootstrap';
import { useEffect } from 'react';
// import ProductListCard from '../../components/ProductListCart/ProductListCart';
import { connect } from 'react-redux';
import BtnGoTo from '../../components/BtnGoTo/BtnGoTo';
import ProductListCart from '../../components/ProductListCart/ProductListCart';

const CartHome = () => {
	useEffect(() => window.scrollTo(0, 0), []);
	return (
		<Container fluid>
			<h1 className='text-secondary border-bottom-info'>Cart</h1>
			<BtnGoTo to='/' text='Back' />
			<ProductListCart />
		</Container>
	);
};

const mapStateToProps = state => ({
	data: state.data,
	cart: state.cart,
	categorys: state.categorys,
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
	handleDeleteToCart(payload) {
		dispatch({
			type: 'ADDTOCART',
			payload,
		});
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(CartHome);
