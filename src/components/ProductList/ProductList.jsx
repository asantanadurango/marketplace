import ProductCard from '../ProductCard/ProductCard';
import { useParams } from 'react-router-dom';
import './ProductList.css';
const ProductList = ({ data = [], cart = [] }) => {
	const { query } = useParams();
	const filters = query ? data.filter(p => p.category === query) : data;

	return (
		<div className='productList-container'>
			<ul className='row'>
				{filters.map(({ name, description, marca, category, price, combo, img }, idx) => {
					const existOnCart = cart.some(e => e.name === name);
					return (
						<ProductCard
							key={idx}
							name={name}
							description={description}
							marca={marca}
							category={category}
							price={price}
							combo={combo}
							img={img}
							btnText={'Add to cart'}
							existOnCart={existOnCart}
						/>
					);
				})}
			</ul>
		</div>
	);
};

export default ProductList;
