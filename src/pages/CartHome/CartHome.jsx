import { useEffect } from 'react';

// REACT-BOOTSTRAP
import { Container } from 'react-bootstrap';

// COMPONENTS
import BtnGoTo from '../../components/BtnGoTo/BtnGoTo';
import ProductListCart from '../../components/ProductListCart/ProductListCart';
import { HOME_PATH } from '../../App';

const CartHome = () => {
	useEffect(() => window.scrollTo(0, 0), []);
	console.log('cart');
	return (
		<Container fluid>
			<div className='border-bottom-info mb-2 d-flex justify-content-start align-items-center'>
				<h1 className='text-secondary'>Cart</h1>
				<BtnGoTo to={HOME_PATH} text='Back' />
			</div>
			<ProductListCart />
		</Container>
	);
};

export default CartHome;
