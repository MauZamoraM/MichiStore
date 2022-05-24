import { Item } from './Item';
import './Cart.css';

export function ItemList({ productos }) {
	return (
		<div className="items">
			{productos.map((prod) => (
				<Item key={prod.id} {...prod} />
			))}
		</div>
	);
}
