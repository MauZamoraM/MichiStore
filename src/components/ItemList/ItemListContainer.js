import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductos, getProductosByCategory } from '../../productos';
import './Cart.css';
import { ItemList } from './ItemList';

export const ItemListContainer = ({ greeting }) => {
	const [productos, setProductos] = useState([]);
	const [loading, setLoading] = useState(true);

	const { categoryId } = useParams();

	useEffect(() => {
		setLoading(true);
		if (!categoryId) {
			getProductos()
				.then((res) => {
					setProductos(res);
				})
				.catch((error) => {
					console.log(error);
				})
				.finally(() => {
					setLoading(false);
				});
		} else {
			getProductosByCategory(categoryId)
				.then((res) => {
					setProductos(res);
				})
				.catch((error) => {
					console.log(error);
				})
				.finally(() => {
					setLoading(false);
				});
		}
	}, [categoryId]);

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
			<h2 style={{ color: '#fab43d' }} className="mt-4">
				- {categoryId || greeting} -
			</h2>
			{productos.length > 0 ? (
				<ItemList productos={productos} />
			) : (
				<h2>No hay productos</h2>
			)}
		</div>
	);
};
