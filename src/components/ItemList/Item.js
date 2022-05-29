import './Cart.css';

export function Item({ id, nombre, precio, stock, img, descripcion }) {
	return (
		<div className="card animate__animated animate__fadeIn">
			<div className="card-image">
				<img src={img} className="imagen2" alt="Imagen producto" />
			</div>
			<div className="info">
				<div className="category">
					<b>{nombre}</b>
				</div>
				<div className="heading">
					<p>$ {precio}</p>
				</div>
			</div>
		</div>
	);
}
