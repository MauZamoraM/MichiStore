import { db } from '.';
import {
	getDocs,
	getDoc,
	collection,
	query,
	where,
	doc,
	writeBatch,
	documentId,
	addDoc,
} from 'firebase/firestore';

export function getProd(categoryId) {
	return new Promise((resolve, reject) => {
		const collectionRef = categoryId
			? query(
					collection(db, 'productos'),
					where('categoria', '==', categoryId),
			  )
			: collection(db, 'productos');

		getDocs(collectionRef)
			.then((response) => {
				const productos = response.docs.map((doc) => {
					return { id: doc.id, ...doc.data() };
				});
				resolve(productos);
			})
			.catch((error) => {
				reject(error);
			});
	});
}

export function getDetailProd(productId) {
	return new Promise((resolve, reject) => {
		getDoc(doc(db, 'productos', productId))
			.then((response) => {
				const producto = { id: response.id, ...response.data() };
				resolve(producto);
			})
			.catch((error) => reject(error));
	});
}

export function crateOrderProd(obj, cart, setCart) {
	return new Promise((resolve, reject) => {
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
				resolve(id);
			})
			.catch((error) => {
				reject(error);
			});
	});
}
