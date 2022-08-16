import oopsDuck from './assets/oopsDuck.jpeg';
const NotFound = () => {
	return (
		<div
			style={{
				height: '90vh',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				flexDirection: 'column',
			}}>
			<img className='img-fluid w-100' src={oopsDuck} alt='' />
			<h1>No hay coincidencias</h1>
		</div>
	);
};

export default NotFound;
