const productos = [
	{
		id: 1,
		nombre: 'Rascador',
		precio: 1500,
		img: 'https://m.media-amazon.com/images/I/71dv6K8Zp-L._AC_UL320_.jpg',
		stock: 25,
		descripcion: 'Rascador chico para gatos de color gris',
	},
	{
		id: 2,
		nombre: 'Alimento para gato',
		precio: 500,
		img: 'https://m.media-amazon.com/images/I/61kzm-HmizL._AC_UL320_.jpg',
		stock: 10,
		descripcion: 'Alimento para gatos seco, cantidad de 10kg',
	},
	{
		id: 3,
		nombre: 'Arenero para gato',
		precio: 500,
		img: 'https://m.media-amazon.com/images/I/51Q7E8zwvdL._AC_UL320_.jpg',
		stock: 5,
		descripcion: 'Arenero para gato grande, cerrado, de color blanco',
	},
	{
		id: 4,
		nombre: 'Collar',
		precio: 200,
		img: 'https://m.media-amazon.com/images/I/71ZZJrxT3-L._AC_UL320_.jpg',
		stock: 40,
		descripcion: 'Collar reflectante personalizado y ajustable',
	},
];

export function getProductos() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(productos);
		}, 1000);
	});
}
