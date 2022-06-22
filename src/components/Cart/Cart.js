import { useContext } from 'react';
import ContextCart from '../../context/CartContext';
import { CartDetail } from './CartDetail';
import { Link } from 'react-router-dom';
import './Cart.css';

export const Cart = ({ titulo }) => {
	const { cart, total, setCart } = useContext(ContextCart);

	if (cart.length === 0) {
		return (
			<div>
				<h1
					className="mt-4 animate__animated animate__fadeIn"
					style={{ color: '#fab43d' }}
				>
					Carrito vacio
					<br />
					<br />
					<Link style={{ color: '#fab43d' }} to="/productos">
						<h2>- Seguir comprando... -</h2>
					</Link>
				</h1>
			</div>
		);
	} else {
		return (
			<div className="animate__animated animate__fadeIn">
				<h1 className="mt-4" style={{ color: '#fab43d' }}>
					- {titulo} -
				</h1>
				<div>
					<button
						className="deleteAll m-2"
						onClick={() => {
							setCart([]);
						}}
					>
						<span>Delete All</span>
					</button>
				</div>
				<div>
					{cart.map((producto) => {
						return (
							<div key={producto.id}>
								<CartDetail {...producto} />
							</div>
						);
					})}
				</div>
				<h4 className="m-3" style={{ color: 'gray' }}>
					Total a pagar: ${total}
				</h4>
				<Link to="/carrito/finalizar">
					<div className="m-3 fancy">
						<span className="top-key"></span>
						<span className="text">Finalizar compra</span>
						<span className="bottom-key-1"></span>
						<span className="bottom-key-2"></span>
					</div>
				</Link>
			</div>
		);
	}
};
