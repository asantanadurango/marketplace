import React from 'react';
import { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import GrupedSpan from './../GrupedSpan/GrupedSpan';

const BtnSetUnits = ({ action, btnText, varian, disabled = false }) => (
	<Button disabled={disabled} variant={varian} size='sm' onClick={action}>
		{btnText}
	</Button>
);

const ProductCardCart = ({ record, removeToCart, addTotal, subtractTotal, resumen }) => {
	const { name, description, brand, category, price, combo, img } = record;
	const [units, setUnits] = useState(1);
	const add = () => {
		setUnits(units + 1);
		addTotal(price);
	};
	const subtract = () => {
		units > 1 && setUnits(units - 1);
		subtractTotal(price);
	};

	return (
		<li className='col d-flex justify-content-center mb-3' key={name}>
			<Card style={{ width: '18rem' }}>
				<Card.Img variant='top' src={img} />
				<Card.Body>
					<Card.Title>{name}</Card.Title>
					<Card.Text className='text-end'>
						Price:
						<strong> ${price.toLocaleString('es')}</strong>
					</Card.Text>
					<Card.Text className='mb-1'>
						<span>{description}</span>
					</Card.Text>
					<Card.Text className='mb-1'>
						<span>{brand}</span>
					</Card.Text>
					<Card.Text className='mb-1'>
						<span>{category}</span>
					</Card.Text>
					<Card.Text className='mb-1'>
						Combo: <GrupedSpan combo={combo} />
					</Card.Text>
					<div className='text-center'>
						<div>
							<BtnSetUnits
								action={subtract}
								btnText='-'
								varian={'outline-danger'}
								disabled={units === 1 && true}
							/>
							<span style={{ margin: '5px', position: 'relative', top: '3px', userSelect: 'none' }}>
								{units}
							</span>
							<BtnSetUnits action={add} btnText='+' varian={'outline-success'} />
						</div>
						<div>
							<strong>${(units * price).toLocaleString('es')}</strong>
						</div>
						<div>
							<Button
								variant='primary'
								className='col w-auto'
								onClick={() => {
									subtractTotal(units * price);
									removeToCart(name);
								}}>
								Remove
							</Button>
						</div>
					</div>
				</Card.Body>
			</Card>
		</li>
	);
};

export default ProductCardCart;
