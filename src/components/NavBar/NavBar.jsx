import { Navbar } from 'react-bootstrap';
import NavLink from '../NavLink/NavLink.jsx';
import { connect } from 'react-redux';
import './NavBar.css';
import { SETKEYWORD } from '../../actions.js';

const NavBar = ({ listCategories, filterByCategory, setListFilter, listFilters, setKeyWord, outHome = false }) => {
	const selectCategory = listFilters.category;
	const selectMarca = listFilters.marca;
	return (
		<Navbar bg='dark' variant='dark'>
			{outHome ? (
				<section className='my-5 w-100 col d-flex flex-column justify-content-start align-items-center'>
					<NavLink to='/'>Home</NavLink>
				</section>
			) : (
				listCategories.map(({ title, categorys }, idx) => {
					return (
						<section key={idx}>
							<nav className='nav col d-flex flex-column  align-items-start'>
								<label className='item-category'>
									<input
										type='radio'
										defaultChecked
										name={title}
										onClick={() => {
											setListFilter(title);
											filterByCategory('');
										}}
									/>
									<strong>{title}</strong>
								</label>
								{categorys.map(category => (
									<label className='item-category' htmlFor={category} key={category}>
										<input
											type='radio'
											name={title}
											id={category}
											defaultChecked={
												category === selectCategory ||
												category === selectMarca
													? true
													: false
											}
											onClick={() => {
												setListFilter(category);
												filterByCategory(category);
												setKeyWord('');
											}}
										/>
										<span>{category[0].toUpperCase() + category.substring(1)}</span>
									</label>
								))}
							</nav>
						</section>
					);
				})
			)}
		</Navbar>
	);
};

const mapStateToProps = state => ({
	listCategories: state.listCategories,
	cart: state.cart,
	listFilters: state.listFilters,
});

const mapDispatchToProps = dispatch => ({
	filterByCategory(payload) {
		dispatch({
			type: 'FILTERPRODUCTS',
			payload,
		});
	},
	setListFilter(payload) {
		dispatch({
			type: 'SETLISTFILTER',
			payload,
		});
	},
	setKeyWord(payload) {
		dispatch({
			type: 'SETKEYWORD',
			payload,
		});
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
