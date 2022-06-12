import './ProductListCart.css';
import { connect } from 'react-redux';
import ProductCardCart from '../ProductCardCart/ProductCardCart';
const ProductListCart = ({ cart = [], total, removeToCart, addTotal, subtractTotal }) => {
	const resumen = { cartLength: cart.length, total, shippingCosts: 0 };
	return (
		<div className='invoiceCart-container'>
			<div className='container-ul-cart'>
				<ul className='row'>
					{cart.map((record, idx) => {
						return (
							<ProductCardCart
								key={idx}
								record={record}
								removeToCart={removeToCart}
								addTotal={addTotal}
								subtractTotal={subtractTotal}
								resumen={resumen}
							/>
						);
					})}
				</ul>
			</div>

			<div className='resumen'>
				<div className=' d-flex justify-content-between'>
					<span>Cantidad de articulos</span>
					<strong>{resumen.cartLength}</strong>
				</div>

				<div className=' d-flex justify-content-between'>
					<span>Valor</span>
					<strong>$ {resumen.total.toLocaleString('es')}</strong>
				</div>

				<div className=' d-flex justify-content-between'>
					<span>Gastos de envio</span>
					<strong>${resumen.shippingCosts}</strong>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = state => ({
	total: state.total,
	cart: state.cart,
	categorys: state.categorys,
});

const mapDispatchToProps = dispatch => ({
	subtractTotal(payload) {
		dispatch({
			type: 'SUBTRACTTOTAL',
			payload,
		});
	},
	addTotal(payload) {
		dispatch({
			type: 'ADDTOTAL',
			payload,
		});
	},
	removeToCart(payload) {
		dispatch({
			type: 'REMOVETOCART',
			payload,
		});
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductListCart);
