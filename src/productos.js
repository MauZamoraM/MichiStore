const productos = [
	{
		id: 1,
		nombre: 'Rascador',
		precio: 1500,
		categoria: 'Rascador',
		img: 'https://m.media-amazon.com/images/I/71dv6K8Zp-L._AC_UL320_.jpg',
		stock: 25,
		descripcion:
			'Bienvenido al parque de atracciones para gatos: ¡Mira! Hay 3 bolas voladoras. Las patas peludas activas han estado listas para que se muevan y vuelen. ¿También quieres unirte? Retira uno de los palos y juega con tu pequeña pelota de pelaje.',
	},
	{
		id: 2,
		nombre: 'Alimento Minino',
		precio: 500,
		categoria: 'Alimento',
		img: 'https://m.media-amazon.com/images/I/61kzm-HmizL._AC_UL320_.jpg',
		stock: 10,
		descripcion: 'Alimento para gatos seco, cantidad de 10kg',
	},
	{
		id: 3,
		nombre: 'Arenero para gato',
		precio: 500,
		categoria: 'Arena',
		img: 'https://m.media-amazon.com/images/I/51Q7E8zwvdL._AC_UL320_.jpg',
		stock: 5,
		descripcion: 'Arenero para gato grande, cerrado, de color blanco',
	},
	{
		id: 4,
		nombre: 'Collar',
		precio: 200,
		categoria: 'Juguetes y más',
		img: 'https://m.media-amazon.com/images/I/71ZZJrxT3-L._AC_UL320_.jpg',
		stock: 40,
		descripcion: 'Collar reflectante personalizado y ajustable',
	},
	{
		id: 5,
		nombre: 'Alimento Hills',
		precio: 600,
		categoria: 'Alimento',
		img: 'https://m.media-amazon.com/images/I/71KAf6vWfbL._AC_SX679_.jpg',
		stock: 40,
		descripcion: 'Alimento para gato Hills Indoor, seco',
	},
	{
		id: 6,
		nombre: 'Kit de juguetes',
		precio: 300,
		categoria: 'Juguetes y más',
		img: 'https://m.media-amazon.com/images/I/71qK1Tyv0gL._AC_SX679_.jpg',
		stock: 40,
		descripcion:
			'Kit de juguetes para gatos de 24 piezas con tunel plegable y más',
	},
	{
		id: 7,
		nombre: 'Arena para gatos Fresh Steps',
		precio: 300,
		categoria: 'Arena',
		img: 'https://m.media-amazon.com/images/I/91WXbakg-JL._AC_SX679_.jpg',
		stock: 40,
		descripcion: 'Fresh Step Olor Shield - Arena perfumada',
	},
	{
		id: 8,
		nombre: 'Rascador para gatos Golden King',
		precio: 300,
		categoria: 'Rascador',
		img: 'https://m.media-amazon.com/images/I/710jd1flf6L._AC_SX679_.jpg',
		stock: 40,
		descripcion: 'Rascador para Gatos 75 cm de Alto',
	},
];

export function getProductos() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(productos);
		}, 2000);
	});
}

export function getProductosById(id) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(productos.find((prod) => prod.id === id));
		}, 2000);
	});
}
export function getProductosByCategory(categoryId) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(productos.filter((prod) => prod.categoria === categoryId));
		}, 2000);
	});
}
