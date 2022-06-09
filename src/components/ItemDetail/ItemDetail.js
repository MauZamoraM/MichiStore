import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ItemCount } from '../ItemCount/ItemCount';
import ContextCart from '../../context/CartContext';

export const ItemDetail = ({
	id,
	nombre,
	categoria,
	precio,
	stock,
	img,
	descripcion,
}) => {
	const [cantidad, setCantidad] = useState(0);

	const { addCart, getProdCant } = useContext(ContextCart);

	const handleOnAdd = (cantidad) => {
		setCantidad(cantidad);
		addCart({
			id,
			nombre,
			categoria,
			precio,
			stock,
			img,
			descripcion,
			cantidad,
		});
	};

	return (
		<div className="contenedor-detalles animate__animated animate__fadeIn">
			<div className="img-prod">
				<img src={img} className="img-details" alt="img-details" />
			</div>
			<div className="details">
				<h6>
					Categoria: -
					<Link className="categoria" to={`/categoria/${categoria}`}>
						{categoria}
					</Link>
					-
				</h6>
				<h1>{nombre}</h1>
				<hr />
				<p>{descripcion}</p>
				<p>$ {precio}</p>
				<p>Stock: {stock}</p>
				{cantidad > 0 ? (
					<Link
						to="/cart"
						className="cta animate__animated animate__fadeIn"
					>
						<span className="hover-underline-animation">
							{' '}
							Finalizar compra{' '}
						</span>
						<svg
							id="arrow-horizontal"
							xmlns="http://www.w3.org/2000/svg"
							width="30"
							height="10"
							viewBox="0 0 46 16"
						>
							<path
								id="Path_10"
								data-name="Path 10"
								d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
								transform="translate(30)"
							></path>
						</svg>
					</Link>
				) : (
					<ItemCount
						stock={stock}
						inicial={getProdCant(id)?.cantidad}
						onConfirm={handleOnAdd}
					/>
				)}
			</div>
		</div>
	);
};
