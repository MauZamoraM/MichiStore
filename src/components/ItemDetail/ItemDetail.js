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
		<div className="contenedor-detalles">
			<div className="img-prod">
				<img src={img} className="img-details" alt="img-details" />
			</div>
			<div className="details">
				<h6>
					Categoria: -
					<a className="categoria" href="...">
						{categoria}
					</a>
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
