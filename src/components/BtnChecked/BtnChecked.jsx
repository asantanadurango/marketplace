import './styles.css';
const BtnChecked = () => {
	return (
		<label className='check-label col'>
			<input className='check-input' type='checkbox' />
			<span className='checkbox'></span>
		</label>
	);
};

export default BtnChecked;