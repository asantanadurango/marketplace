const DATA = [
	{
		id: 1,
		name: 'computer 420g',
		brand: 'hp',
		category: 'technology',
		combo: true,
		description: 'portable pc hd',
		price: 4000000,
		img: 'https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
	},
	{
		id: 2,
		name: 'computer partable',
		brand: 'toshiba',
		category: 'technology',
		combo: true,
		description: 'portable pc hd ultra-K',
		price: 2500000,
		img: 'https://images.pexels.com/photos/5496464/pexels-photo-5496464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=11',
	},
	{
		id: 3,
		name: 'camaro 67100',
		brand: 'chevrolet',
		category: 'transportation',
		combo: false,
		description: 'contable and fast',
		price: 60000000,
		img: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
	},
	{
		id: 4,
		name: 'volvo fast 1200',
		brand: 'volvo',
		category: 'transportation',
		combo: false,
		description: 'volvo-mobile',
		price: 40000000,
		img: 'https://images.pexels.com/photos/845405/pexels-photo-845405.jpeg',
	},
	{
		id: 5,
		name: 'samsung A20',
		brand: 'samsung',
		category: 'technology',
		combo: true,
		description: 'smartphone android',
		price: 1500000,
		img: 'https://images.pexels.com/photos/4171648/pexels-photo-4171648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
	},
	{
		id: 6,
		name: 'shirt pants set',
		brand: 'falabella',
		category: 'moda',
		combo: true,
		description: 'cool shirt pants set',
		price: 180000,
		img: 'https://images.pexels.com/photos/4090831/pexels-photo-4090831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
	},
	{
		id: 7,
		name: 'leather hat',
		brand: 'falabella',
		category: 'moda',
		combo: true,
		description: 'cool leather hat',
		price: 100000,
		img: 'https://images.pexels.com/photos/4090637/pexels-photo-4090637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
	},
	{
		id: 8,
		name: 'leather hat collection',
		brand: 'falabella',
		category: 'moda',
		combo: true,
		description: 'cool collection leather hat',
		price: 500000,
		img: 'https://images.pexels.com/photos/5698917/pexels-photo-5698917.jpeg?cs=srgb&dl=pexels-rodnae-productions-5698917.jpg&fm=jpg',
	},
	{
		id: 9,
		name: 'smarphone + airpods',
		brand: 'samsung',
		category: 'technology',
		combo: true,
		description: 'super smarphone + airpods pro 2000',
		price: 1800000,
		img: 'https://images.pexels.com/photos/5081399/pexels-photo-5081399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
	},
	{
		id: 10,
		name: 'yamaha xtz',
		brand: 'yamaha',
		category: 'transportation',
		combo: true,
		description: 'super motorcycle',
		price: 8000000,
		img: 'https://images.pexels.com/photos/1430931/pexels-photo-1430931.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
	},
];

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
const getAllData = async () => {
	const res = await fetch('http://test.movilbox.co:888/test_mbox/test.php?metodo=productos');
	const data = await res.json();
	let dt = [];
	data.forEach(element => {
		element.Categoria = element.Categoria.toLowerCase();
		element.combo = element.combo ? true : false;
		const { nombre, Categoria, Marca, URL, combo, descripcion, valor } = element;
		dt.push({ name: nombre, category: Categoria, brand: Marca, img: URL, combo, description: descripcion, price: valor });
	});
	await delay(1000);
	return DATA;
	// return dt;
};

export default getAllData;
