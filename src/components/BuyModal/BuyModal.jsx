import { Modal as ModalBootstrap } from 'react-bootstrap';
import BtnChecked from '../BtnChecked/BtnChecked';
import IMG from './assets/successfulPurchaseImg.png';

const BuyModal = ({ smShow }) => {
	return (
		<ModalBootstrap size='sm' show={smShow} onHide={() => setSmShow(false)} aria-labelledby='example-modal-sizes-title-sm'>
			<ModalBootstrap.Header closeButton onClick={() => (window.location.href = '/')}>
				<ModalBootstrap.Title id='example-modal-sizes-title-sm'>
					<BtnChecked />
				</ModalBootstrap.Title>
			</ModalBootstrap.Header>
			<ModalBootstrap.Body>
				<img src={IMG} alt='successfulPurchaseImg' className='w-100 img-fluid' />
			</ModalBootstrap.Body>
		</ModalBootstrap>
	);
};

export default BuyModal;
