import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import ProductListMain from '../../components/ProductListMain/ProductListMain.jsx';
import NotFound from '../NotFound/NotFound.jsx';
// import ProductListMain from './../../components/ProductListCard/ProductListCard';
// import ProductListMain from './../../components/ProductListMain/ProductListMain';
const CategoryHome = ({ dataForShow = [], cart, data, addToCart, setListFilter, setKeyWord, keyword }) => {
	const { query } = useParams();
	const title = query ? query : 'All products';

	let barResults;
	if (keyword.length > 0) {
		setListFilter('');
		barResults = data.filter(e => e.name.toLowerCase().includes(keyword.toLowerCase()));
		console.log(barResults);
	}
	return (
		<Container fluid>
			<div className='border-bottom-info d-flex justify-content-start align-items-center'>
				<h1 className='text-secondary me-5 '>{title}</h1>
				<input
					onChange={e => setKeyWord(e.target.value)}
					type='text'
					className='w-25 border border-2 border-info px-2 rounded-pill'
				/>
			</div>
			{keyword.length > 0 ? (
				barResults.length > 0 ? (
					<ProductListMain data={barResults} addToCart={addToCart} cart={cart} />
				) : (
					<NotFound />
				)
			) : (
				<ProductListMain data={dataForShow} addToCart={addToCart} cart={cart} />
			)}
		</Container>
	);
};

export default CategoryHome;
