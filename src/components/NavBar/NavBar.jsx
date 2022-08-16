import { useEffect } from 'react';

// REACT-BOOTSTRAP
import { Navbar } from 'react-bootstrap';

// REACT-ROUTER-DOM
import { Link } from 'react-router-dom';

// REACT-REDUX
import { useSelector, useDispatch } from 'react-redux/es/exports';

// ACTONS
import { selectFilter, setKeyword, resetFilters, filterProducts } from '../../redux/actions';

// STYLES
import './NavBar.css';

const NavBar = ({ intoHome = true }) => {
	// STORE - DISPATCH
	const filterTags = useSelector(state => state.filtersReducer.filterTags);
	const data = useSelector(state => state.dataReducer.data);
	const selectedFilters = useSelector(state => state.filtersReducer.selectedFilters);
	const itemsForNavList = Object.entries(filterTags);
	const dispatch = useDispatch();

	useEffect(() => {
		if (Object.values(selectedFilters).every(e => e.length === 0)) {
			dispatch(resetFilters(data));
		}
	}, [selectedFilters]);

	return (
		<Navbar bg='dark' variant='dark'>
			{intoHome ? (
				itemsForNavList.map((item, idx) => {
					const [title, list] = item;
					return (
						<section key={idx}>
							<nav className='nav col d-flex flex-column align-items-start'>
								<label className='item-category'>
									<input
										type='radio'
										defaultChecked
										name={title}
										onClick={() => {
											dispatch(setKeyword(''));
											dispatch(
												selectFilter({
													by: title,
													selected: '',
												})
											);
											dispatch(filterProducts({ data }));
										}}
									/>
									<strong>{title[0].toUpperCase() + title.substring(1)}</strong>
								</label>
								{list.map((filterTag, idx) => (
									<label className='item-category' htmlFor={filterTag} key={idx}>
										<input
											type='radio'
											name={title}
											id={filterTag}
											onClick={() => {
												dispatch(setKeyword(''));
												dispatch(
													selectFilter({
														by: title,
														selected: filterTag,
													})
												);
												dispatch(filterProducts({ data }));
											}}
										/>
										<span>{filterTag[0].toUpperCase() + filterTag.substring(1)}</span>
									</label>
								))}
							</nav>
						</section>
					);
				})
			) : (
				<GoToHome />
			)}
		</Navbar>
	);
};

const GoToHome = () => (
	<section className='my-5 w-100 col d-flex flex-column justify-content-start align-items-center'>
		<Link to='/' className='nav-link mx-3 text-info'>
			Home
		</Link>
	</section>
);

export default NavBar;
