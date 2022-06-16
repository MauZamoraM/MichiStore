import { useEffect, useState } from 'react';
// import { getProductosById } from '../../productos';
import './ItemDetail.css';
import { ItemDetail } from './ItemDetail';
import { useParams } from 'react-router-dom';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../service/firebase';

export const ItemDetailContainer = () => {
	const [producto, setProducto] = useState();
	const [loading, setLoading] = useState(true);

	const { productId } = useParams();

	const productos = parseInt(productId);

	useEffect(() => {
		setLoading(true);

		getDoc(doc(db, 'productos', productId))
			.then((response) => {
				const producto = { id: response.id, ...response.data() };
				setProducto(producto);
			})
			.catch((error) => console.log(error))
			.finally(setLoading(false));

		// getProductosById(productos)
		// 	.then((response) => {
		// 		setProducto(response);
		// 	})
		// 	.catch((error) => {
		// 		console.log(error);
		// 	})
		// 	.finally(() => {
		// 		setLoading(false);
		// 	});
	}, [productos]);

	if (loading) {
		return (
			<svg className="loader" viewBox="0 0 100 100">
				<circle className="moon moon-back"></circle>
				<circle className="planet"></circle>
				<circle className="moon moon-front"></circle>
			</svg>
		);
	}

	return (
		<div>
			<ItemDetail {...producto} />
		</div>
	);
};
