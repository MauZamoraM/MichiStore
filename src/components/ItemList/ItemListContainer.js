import { useEffect, useState } from 'react';
import { getProductos } from '../../productos';
import './Cart.css';
import { ItemList } from './ItemList';

export const ItemListContainer = ({ greeting }) => {
	const [productos, setProductos] = useState([]);

	useEffect(() => {
		getProductos().then((res) => {
			setProductos(res);
		});
	}, []);

	return (
		<div>
			<ItemList productos={productos} />
		</div>
	);
};
