const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
const getAllData = async () => {
	const res = await fetch('http://test.movilbox.co:888/test_mbox/test.php?metodo=productos');
	const data = await res.json();
	let dt = [];
	data.forEach(element => {
		element.Categoria = element.Categoria.toLowerCase();
		element.combo = element.combo ? true : false;
		const { nombre, Categoria, Marca, URL, combo, descripcion, valor } = element;
		dt.push({ name: nombre, category: Categoria, marca: Marca, img: URL, combo, description: descripcion, price: valor });
	});
	await delay(1000);
	return dt;
};

export default getAllData;
