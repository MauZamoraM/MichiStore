import './Cart.css';

export const ItemListContainer = (props) => {
	return (
		<div className="items">
			<div className="card">
				<div className="card-image">
					<img
						src={
							'https://www.petsonic.com/blog/wp-content/uploads/2018/10/juguete-gato-1.png'
						}
						alt="Imagen producto"
					/>
				</div>
				<div className="category"> {props.producto} </div>
				<div className="heading">Algun producto de la tienda 😁</div>
			</div>
		</div>
	);
};
