import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Cart.css';
import { ItemList } from './ItemList';
import { getProd } from '../../service/firebase/firestore';
import { Loading } from '../Loading/Loading';

export const ItemListContainer = ({ greeting }) => {
	const [productos, setProductos] = useState([]);
	const [loading, setLoading] = useState(true);

	const { categoryId } = useParams();

	useEffect(() => {
		setLoading(true);

		getProd(categoryId)
			.then((prod) => {
				setProductos(prod);
			})
			.catch((error) => console.log(error))
			.finally(() => {
				setLoading(false);
			});
	}, [categoryId]);

	if (loading) {
		return <Loading />;
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
