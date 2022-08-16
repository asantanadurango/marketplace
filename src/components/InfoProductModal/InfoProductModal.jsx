import { Modal, Button } from 'react-bootstrap';
import BtnChecked from '../BtnChecked/BtnChecked';

const InfoProductModal = props => {
	const { prod, addToCart, addToTotal, existOnCart, ...rest } = props;
	const { name, img, description, brand, category, price } = prod;
	return (
		<Modal {...rest} size='sm' aria-labelledby='contained-modal-title-vcenter' centered>
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
				{existOnCart ? (
					<BtnChecked />
				) : (
					<Button
						variant='primary'
						className='col w-auto'
						onClick={() => {
							addToCart(prod);
							addToTotal(price);
							rest.onHide();
						}}>
						Add To Cart
					</Button>
				)}
				<Button onClick={rest.onHide}>Close</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default InfoProductModal;
