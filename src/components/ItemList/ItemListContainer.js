import { useParams } from 'react-router-dom';
import './Cart.css';
import { ItemList } from './ItemList';
import { getProd } from '../../service/firebase/firestore';
import { Loading } from '../Loading/Loading';
import { useFirestore } from '../../hooks/useFirestore';

export const ItemListContainer = ({ greeting }) => {
	const { categoryId } = useParams();

	const { loading, producto, error } = useFirestore(
		() => getProd(categoryId),
		[categoryId],
	);

	if (loading) {
		return <Loading />;
	}

	if (error) {
		return <h1>Error</h1>;
	}

	return (
		<div>
			<h2 style={{ color: '#fab43d' }} className="mt-4">
				- {categoryId || greeting} -
			</h2>
			{producto.length > 0 ? (
				<ItemList productos={producto} />
			) : (
				<h2>No hay productos</h2>
			)}
		</div>
	);
};
