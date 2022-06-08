import { Link } from 'react-router-dom';
const BtnGoTo = ({ to, text }) => {
	return (
		<div className='position-fixed top-0 end-0 me-5 mt-2'>
			<Link to={to} className='btn btn-primary'>
				{text}
			</Link>
		</div>
	);
};

export default BtnGoTo;
