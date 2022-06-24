import './ItemDetail.css';
import { ItemDetail } from './ItemDetail';
import { useParams } from 'react-router-dom';
import { Loading } from '../Loading/Loading';
import { getDetailProd } from '../../service/firebase/firestore';
import { useFirestore } from '../../hooks/useFirestore';

export const ItemDetailContainer = () => {
	const { productId } = useParams();

	const { loading, producto, error } = useFirestore(
		() => getDetailProd(productId),
		[productId],
	);

	if (loading) {
		return <Loading />;
	}

	if (error) {
		return <h1>Error</h1>;
	}

	return (
		<div>
			<ItemDetail {...producto} />
		</div>
	);
};
