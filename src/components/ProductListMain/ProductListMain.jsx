// REACT-REDUX
import { useSelector } from 'react-redux/es/exports';

// COMPONENTS
import NotFound from '../../pages/NotFound/NotFound';
import ProductCardMain from './../ProductCardMain/ProductCardMain';

// STYLES
import './ProductListMain.css';

const ProductListMain = () => {
	const filteredProducts = useSelector(state => state.filtersReducer.filteredProducts);
	const cart = useSelector(state => state.cartReducer.cart);

	return (
		<div className='productList-container'>
			{filteredProducts.length ? (
				<ul className='row'>
					{filteredProducts.map(({ name, description, brand, category, price, combo, img }, idx) => {
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
			) : (
				<NotFound />
			)}
		</div>
	);
};

export default ProductListMain;
