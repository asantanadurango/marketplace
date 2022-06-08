import App from './App';
import store from './store';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';
import { Provider } from 'react-redux';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
	<Provider store={store}>
		<BrowserRouter>
			<App tab='home' />
		</BrowserRouter>
	</Provider>
);
