import { useContext, useState } from 'react';
import ContextCart from '../../context/CartContext';
import { CartDetail } from './CartDetail';
import { Link } from 'react-router-dom';
import {
	addDoc,
	collection,
	getDocs,
	query,
	where,
	documentId,
	writeBatch,
} from 'firebase/firestore';
import { db } from '../../service/firebase';
import './Cart.css';

export const Cart = ({ titulo }) => {
	const { cart, total, setCart } = useContext(ContextCart);
	const [loading, setLoading] = useState(false);

	const createOrder = () => {
		setLoading(true);
		const obj = {
			buyer: {
				nombre: 'Oscar',
				email: 'oscar@gmail.com',
				telefono: '12121212',
				direccion: 'Mexico',
			},
			items: cart,
			total: total,
		};

		const ids = cart.map((prod) => prod.id);

		const batch = writeBatch(db);

		const fueraStock = [];

		const collectionRef = collection(db, 'productos');

		getDocs(query(collectionRef, where(documentId(), 'in', ids)))
			.then((response) => {
				response.docs.forEach((doc) => {
					const dataDoc = doc.data();
					const prodCantidad = cart.find(
						(prod) => prod.id === doc.id,
					)?.cantidad;

					if (dataDoc.stock >= prodCantidad) {
						batch.update(doc.ref, {
							stock: dataDoc.stock - prodCantidad,
						});
					} else {
						fueraStock.push({ id: doc.id, ...dataDoc });
					}
				});
			})
			.then(() => {
				if (fueraStock.length === 0) {
					const collectionRef = collection(db, 'ordenes');

					return addDoc(collectionRef, obj);
				} else {
					return Promise.reject({
						type: 'out_stock',
						productos: fueraStock,
					});
				}
			})
			.then(({ id }) => {
				batch.commit();
				setCart([]);
			})
			.catch((error) => {
				console.log(error);
			})
			.finally(() => {
				setLoading(false);
			});

		// const collectionRef = collection(db, 'ordenes');

		// addDoc(collectionRef, obj).then(({ id }) => {
		// 	console.log(`Se creo la orden con el id ${id}`);
		// });
	};

	if (loading) {
		return (
			<svg className="loader" viewBox="0 0 100 100">
				<circle className="moon moon-back"></circle>
				<circle className="planet"></circle>
				<circle className="moon moon-front"></circle>
			</svg>
		);
	}

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
				<div className="m-3 fancy" onClick={createOrder}>
					<span className="top-key"></span>
					<span className="text">Finalizar compra</span>
					<span className="bottom-key-1"></span>
					<span className="bottom-key-2"></span>
				</div>
			</div>
		);
	}
};
