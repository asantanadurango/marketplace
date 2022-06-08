import { Modal as ModalBootstrap } from 'react-bootstrap';
import BtnChecked from '../BtnChecked/BtnChecked';

const Modal = ({ smShow }) => {
	return (
		<ModalBootstrap size='sm' show={smShow} onHide={() => setSmShow(false)} aria-labelledby='example-modal-sizes-title-sm'>
			<ModalBootstrap.Header closeButton onClick={() => (window.location.href = '/')}>
				<ModalBootstrap.Title id='example-modal-sizes-title-sm'>
					<BtnChecked />
				</ModalBootstrap.Title>
			</ModalBootstrap.Header>
			<ModalBootstrap.Body>
				<img
					src='https://lh3.googleusercontent.com/p/AF1QipP0j9mpiSrsDf_SlLBdynT1p2Si9Hek-sfwNIZW=w1080-h608-p-no-v0'
					alt='img'
					className='w-100 img-fluid'
				/>
			</ModalBootstrap.Body>
		</ModalBootstrap>
	);
};

export default Modal;
