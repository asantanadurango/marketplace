import React from 'react';
import { Spinner as SpinnerBoostrap, Button, Container } from 'react-bootstrap';
const Spinner = ({ animation = 'grow', color = 'primary' }) => {
	return (
		<Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh' }}>
			<Button style={{ display: 'block', transform: 'scale(2)' }} variant='primary' disabled>
				<SpinnerBoostrap
					variant={color}
					as='span'
					animation={animation}
					size='xl'
					role='status'
					aria-hidden='true'
					className='pl-2'
				/>
				Loading...
			</Button>
		</Container>
	);
};

export default Spinner;
