import { useState } from 'react';

// COMPONENTS
import ProductCardCart from '../ProductCardCart/ProductCardCart';
import BuyModal from '../BuyModal/BuyModal';

// REACT-BOOTSTRAP
import { Button } from 'react-bootstrap';

// REACT-REDUX
import { useDispatch, useSelector } from 'react-redux/es/exports';

// ACTIONS
import { removeToCart, substractToTotal, addToTotal } from '../../redux/actions';

// STYLES
import './ProductListCart.css';
const ProductListCart = () => {
	const [smShow, setSmShow] = useState(false);

	const cart = useSelector(state => state.cartReducer.cart);
	const total = useSelector(state => state.totalReducer.total);
	const dispatch = useDispatch();

	const resumen = { cartLength: cart.length, total, shippingCosts: (total * 0.05).toLocaleString('es') };
	return (
		<div className='invoiceCart-container'>
			<div className='container-ul-cart'>
				<ul className='row'>
					{cart.map((record, idx) => {
						return (
							<ProductCardCart
								key={idx}
								record={record}
								removeToCart={payload => dispatch(removeToCart(payload))}
								addTotal={payload => dispatch(addToTotal(payload))}
								subtractTotal={payload => dispatch(substractToTotal(payload))}
							/>
						);
					})}
				</ul>
			</div>

			<div className='resumen'>
				<div className='d-flex justify-content-between'>
					<span>Cantidad de articulos</span>
					<strong>{resumen.cartLength}</strong>
				</div>

				<div className='d-flex justify-content-between'>
					<span>Valor</span>
					<strong>$ {resumen.total.toLocaleString('es')}</strong>
				</div>

				<div className='d-flex justify-content-between'>
					<span>Gastos de envio</span>
					<strong>${resumen.shippingCosts}</strong>
				</div>

				<div className='d-flex justify-content-center mt-5'>
					<Button onClick={() => setSmShow(true)} variant='outline-info px-4 py-1'>
						Buy
					</Button>
					<BuyModal smShow={smShow} />
				</div>
			</div>
		</div>
	);
};

export default ProductListCart;
