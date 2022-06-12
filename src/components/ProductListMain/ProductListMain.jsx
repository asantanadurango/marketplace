import './ProductListMain.css';
import { useParams } from 'react-router-dom';
import ProductCardMain from './../ProductCardMain/ProductCardMain';
const ProductListMain = ({ data = [], cart = [] }) => {
	const { query } = useParams();
	const filters = query ? data.filter(p => p.category === query) : data;

	return (
		<div className='productList-container'>
			<ul className='row'>
				{filters.map(({ name, description, brand, category, price, combo, img }, idx) => {
					const existOnCart = cart.some(e => e.name === name);
					return (
						<ProductCardMain
							key={idx}
							name={name}
							description={description}
							brand={brand}
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

export default ProductListMain;
