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
			<img
				className='img-fluid w-100'
				src='https://hidden10.zentica-global.com/wp-content/uploads/2021/01/335b76ca-14ff-46e1-99ea-ca92f550aaf5-5ea1dd86e8e38.jpeg'
				alt=''
			/>
			<h1>No hay coincidencias</h1>
		</div>
	);
};

export default NotFound;
