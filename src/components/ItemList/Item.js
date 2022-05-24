import './Cart.css';

export function Item({ id, nombre, precio, stock, img, descripcion }) {
	return (
		<div className="card">
			<div className="card-image">
				<img src={img} alt="Imagen producto" />
			</div>
			<div className="category"> {nombre} </div>
			<div className="heading">
				<h5>{descripcion}</h5>
				<p>$ {precio}</p>
				<p>Stock: {stock}</p>
			</div>
		</div>
	);
}
