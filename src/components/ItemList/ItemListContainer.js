import './Cart.css';

export const ItemListContainer = (props) => {
	return (
		<div className="items">
			<div class="card">
				<div class="card-image">
					<img
						src={
							'https://www.petsonic.com/blog/wp-content/uploads/2018/10/juguete-gato-1.png'
						}
						alt="Imagen producto"
					/>
				</div>
				<div class="category"> {props.producto} </div>
				<div class="heading">Algun producto de la tienda 😁</div>
			</div>
		</div>
	);
};
