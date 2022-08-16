import { useState } from 'react';

// COMPONENTS
import GrupedSpan from '../GrupedSpan/GrupedSpan';
import BtnChecked from './../BtnChecked/BtnChecked';
import InfoProductModal from '../InfoProductModal/InfoProductModal';

// REACT-BOOTSTRAP
import { Card, Button } from 'react-bootstrap';

// REACT-REDUX
import { useSelector, useDispatch } from 'react-redux/es/exports';

// ACTIONS
import { addToCart, addToTotal } from '../../redux/actions';

// STYLES
import './ProductCardMain.css';

const ProductCardMain = ({ name, description, brand, category, price, combo, img, existOnCart = false }) => {
	const prod = { name, description, brand, category, price, combo, img };

	// STORE - DISPATCH
	const dispatch = useDispatch();

	const [modalShow, setModalShow] = useState(false);
	return (
		<>
			<li className='col d-flex justify-content-center mb-3'>
				<Card style={{ width: '18rem' }}>
					<Button variant='primary' className='bg-white border-0' onClick={() => setModalShow(true)}>
						<Card.Img variant='top' src={img} />
					</Button>
					<Card.Body>
						<Card.Title>{name}</Card.Title>
						<Card.Title>{brand}</Card.Title>
						<Card.Text className='text-end'>
							Price:
							<strong> ${price.toLocaleString('es')}</strong>
						</Card.Text>
						<Card.Text>
							<span>{description}</span>
						</Card.Text>
						<Card.Text>
							Combo: <GrupedSpan combo={combo} />
						</Card.Text>
						<div className='text-center'>
							{existOnCart ? (
								<BtnChecked />
							) : (
								<Button
									variant='primary'
									className='col w-auto'
									onClick={() => {
										dispatch(addToCart(prod));
										dispatch(addToTotal(price));
									}}>
									Add To Cart
								</Button>
							)}
						</div>
					</Card.Body>
				</Card>
			</li>
			<InfoProductModal
				show={modalShow}
				onHide={() => setModalShow(false)}
				prod={prod}
				addToCart={payload => dispatch(addToCart(payload))}
				addToTotal={payload => dispatch(addToTotal(payload))}
				existOnCart={existOnCart}
			/>
		</>
	);
};

export default ProductCardMain;
