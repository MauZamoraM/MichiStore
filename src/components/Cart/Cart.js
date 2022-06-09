import { useContext } from 'react';
import ContextCart from '../../context/CartContext';

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
							{producto.nombre} {producto.cantidad}
						</div>
					);
				})}
			</div>
		</div>
	);
};
