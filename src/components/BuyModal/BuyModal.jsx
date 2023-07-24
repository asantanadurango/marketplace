import { Modal as ModalBootstrap } from 'react-bootstrap';
import BtnChecked from '../BtnChecked/BtnChecked';
import IMG from './assets/successfulPurchaseImg.png';
import {useNavigate} from 'react-router-dom';
import { HOME_PATH } from '../../App';

const BuyModal = ({ smShow }) => {
	const navigate = useNavigate()
	return (
		<ModalBootstrap size='sm' show={smShow} aria-labelledby='example-modal-sizes-title-sm'>
			<ModalBootstrap.Header closeButton onClick={() => (window.location.href = `${HOME_PATH}`)}>
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
