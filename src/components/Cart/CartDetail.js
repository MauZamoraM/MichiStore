import { useContext } from 'react';
import ContextCart from '../../context/CartContext';
import './Cart.css';

export function CartDetail({
	id,
	nombre,
	categoria,
	precio,
	stock,
	img,
	descripcion,
	cantidad,
}) {
	const { cart, deleteFromCart } = useContext(ContextCart);

	return (
		<div className="containerCart">
			<div className="imgCartContainer">
				<img className="imgCart" src={img} alt="" />
			</div>
			<div className="infoCart">
				<h4>{nombre}</h4>
				<h4>Cantidad: {cantidad}</h4>
				<h4>Precio: {precio}</h4>
			</div>
			<div>
				<button
					onClick={() => {
						deleteFromCart(id);
					}}
					className="noselect"
				>
					<span className="text">Delete</span>
					<span className="icon">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
						>
							<path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path>
						</svg>
					</span>
				</button>
			</div>
		</div>
	);
}
