import { useContext } from 'react';
import ContextCart from '../../context/CartContext';
import { CartDetail } from './CartDetail';

export const Cart = ({ titulo }) => {
	const { cart } = useContext(ContextCart);

	return (
		<div>
			<h1 className="mt-4" style={{ color: '#fab43d' }}>
				- {titulo} -
			</h1>
			<div>
				{cart.map((producto) => {
					return (
						<div key={producto.id}>
							<CartDetail {...producto} />
						</div>
					);
				})}
			</div>
		</div>
	);
};
