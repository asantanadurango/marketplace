import getAllData from '../services/getAllData';
const initialCalled = async setter => {
	const res = await getAllData();
	setter(res);
};

export default initialCalled;
