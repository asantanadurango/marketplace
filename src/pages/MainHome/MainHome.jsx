// COMPONENTS
import ProductListMain from '../../components/ProductListMain/ProductListMain.jsx';

// REACT-BOOTSTRAP
import { Container } from 'react-bootstrap';

// REACT-ROUTER-DOM
import { useParams } from 'react-router-dom';

// ACTIONS
import { setKeyword, setFilterProductsBySearchbar, resetFilters } from '../../redux/actions';

// REACT-REDUX
import { useDispatch, useSelector } from 'react-redux/es/exports';

const MainHome = () => {
	// STORE - DISPATCH
	const data = useSelector(state => state.dataReducer.data);
	const dispatch = useDispatch();

	const { query } = useParams();
	const title = query ? query : 'All products';

	const setProdFiltersOnUseEffect = keywordCurrent => {
		const searchBarResults = data.filter(e => e.name.toLowerCase().includes(keywordCurrent.toLowerCase()));
		if (keywordCurrent.length > 0) {
			dispatch(resetFilters());
			dispatch(setFilterProductsBySearchbar(searchBarResults));
		} else {
			dispatch(setFilterProductsBySearchbar(data));
		}
	};

	return (
		<Container fluid>
			<div className='border-bottom-info mb-2 d-flex justify-content-start align-items-center'>
				<h1 className='text-secondary me-5'>{title}</h1>
				<input
					onChange={e => {
						setProdFiltersOnUseEffect(e.target.value);
						dispatch(setKeyword(e.target.value));
					}}
					type='text'
					className='w-25 border border-2 border-info px-2 rounded-pill'
				/>
			</div>
			<ProductListMain />
		</Container>
	);
};

export default MainHome;
