import { useEffect, useState } from 'react';
import { getProductosById } from '../../productos';
import './ItemDetail.css';
import { ItemDetail } from './ItemDetail';

export const ItemDetailContainer = () => {
	const [producto, setProducto] = useState();

	useEffect(() => {
		getProductosById(1).then((response) => {
			setProducto(response);
		});
	}, []);

	return (
		<div>
			<ItemDetail {...producto} />
		</div>
	);
};
