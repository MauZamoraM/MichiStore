import { Link } from 'react-router-dom';
import { ItemCount } from '../ItemCount/ItemCount';

export const ItemDetail = ({
	id,
	nombre,
	categoria,
	precio,
	stock,
	img,
	descripcion,
}) => {
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
				<ItemCount stock={stock} inicial="1" />
			</div>
		</div>
	);
};
