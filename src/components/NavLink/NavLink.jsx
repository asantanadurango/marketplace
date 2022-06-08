import { Link as NavLinkReactRouter } from 'react-router-dom';
const NavLink = ({ to, children }) => {
	return (
		<NavLinkReactRouter className='nav-link mx-3 text-info' to={to}>
			{children}
		</NavLinkReactRouter>
	);
};

export default NavLink;
