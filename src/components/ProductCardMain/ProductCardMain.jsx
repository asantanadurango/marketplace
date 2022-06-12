import GrupedSpan from '../GrupedSpan/GrupedSpan';
import { Card, Button, Modal } from 'react-bootstrap';
import BtnChecked from './../BtnChecked/BtnChecked';
import { connect } from 'react-redux';
import { useState } from 'react';
import './ProductCardMain.css';
const ProductCardMain = ({
	name,
	description,
	brand,
	category,
	price,
	combo,
	img,
	addToCart,
	existOnCart = false,
	addTotal,
	data,
	addToListCombos,
}) => {
	const prod = { name, description, brand, category, price, combo, img };
	const [modalShow, setModalShow] = useState(false);

	const MyVerticallyCenteredModal = props => {
		return (
			<Modal {...props} size='sm' aria-labelledby='contained-modal-title-vcenter' centered>
				<Modal.Header closeButton>
					<Modal.Title id='contained-modal-title-vcenter'>{name}</Modal.Title>
				</Modal.Header>
				<Modal.Body className='p-1'>
					<img src={img} className='w-100	 img-fluid' alt='' />
					<h6>{description}</h6>
					<h6>{brand}</h6>
					<h6>{category}</h6>
				</Modal.Body>
				<Modal.Footer>
					<Button
						variant='primary'
						className='col w-auto'
						onClick={() => {
							addToCart(prod);
							addTotal(price);
							props.onHide();
						}}>
						Add To Cart
					</Button>
					<Button onClick={props.onHide}>Close</Button>
				</Modal.Footer>
			</Modal>
		);
	};

	const agrupeds = data.filter(e => e.combo).filter(e => e.name !== name);
	const tagAgrupeds = agrupeds.map(e => e.name);
	const sendCombo = matchWord => {
		const match = data.find(e => e.name === matchWord);
		// console.log([prod, match]);
		return [prod, match];
	};

	return (
		<>
			<li className='col d-flex justify-content-center mb-3'>
				<Card style={{ width: '18rem' }}>
					{combo && (
						<select
							defaultValue=''
							name={name}
							className='scroll-container'
							onClick={e => {
								addToListCombos(sendCombo(e.target.value));
							}}>
							<option value='' disabled>
								Combotizar
							</option>
							{tagAgrupeds.map((e, idx) => (
								<option key={idx} value={e}>
									{e}
								</option>
							))}
						</select>
					)}
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
										addToCart(prod);
										addTotal(price);
									}}>
									Add To Cart
								</Button>
							)}
						</div>
					</Card.Body>
				</Card>
			</li>
			<MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
		</>
	);
};

const mapStateToProps = state => ({
	dataForShow: state.dataForShow,
	cart: state.cart,
	data: state.data,
	keyword: state.keyword,
});

const mapDispatchToProps = dispatch => ({
	addTotal(payload) {
		dispatch({
			type: 'ADDTOTAL',
			payload,
		});
	},
	addToCart(payload) {
		dispatch({
			type: 'ADDTOCART',
			payload,
		});
	},
	addToListCombos(payload) {
		dispatch({
			type: 'ADDTOLISTCOMBOS',
			payload,
		});
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductCardMain);
