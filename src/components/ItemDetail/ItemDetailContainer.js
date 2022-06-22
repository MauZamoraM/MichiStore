import { useEffect, useState } from 'react';
import './ItemDetail.css';
import { ItemDetail } from './ItemDetail';
import { useParams } from 'react-router-dom';
import { Loading } from '../Loading/Loading';
import { getDetailProd } from '../../service/firebase/firestore';

export const ItemDetailContainer = () => {
	const [producto, setProducto] = useState();
	const [loading, setLoading] = useState(true);

	const { productId } = useParams();

	useEffect(() => {
		setLoading(true);

		getDetailProd(productId)
			.then((res) => {
				setProducto(res);
			})
			.catch((error) => console.log(error))
			.finally(() => {
				setLoading(false);
			});
	}, [productId]);

	if (loading) {
		return <Loading />;
	}

	return (
		<div>
			<ItemDetail {...producto} />
		</div>
	);
};
