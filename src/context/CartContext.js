import { createContext, useState } from 'react';

const ContextCart = createContext();

export const CartContextProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	const addCart = (prodAdd) => {
		if (!isInCart(prodAdd.id)) {
			setCart([...cart, prodAdd]);
		} else {
			const newCart = cart.map((prod) => {
				if (prod.id === prodAdd.id) {
					let cantidadNueva = prod.cantidad + prodAdd.cantidad;
					console.log(prodAdd.stock);
					let newProd;
					if (cantidadNueva >= prodAdd.stock) {
						console.log('es mayor');
						newProd = {
							...prod,
							cantidad: prodAdd.stock,
						};
					} else {
						console.log('todavia se puede');
						newProd = {
							...prod,
							cantidad: cantidadNueva,
						};
					}
					return newProd;
				} else {
					return prod;
				}
			});
			setCart(newCart);
		}
	};

	const getQuantity = () => {
		let accu = 0;
		cart.forEach((prod) => {
			accu += prod.cantidad;
		});
		return accu;
	};

	const isInCart = (id) => {
		return cart.some((prod) => prod.id === id);
	};

	const getProdCant = (id) => {
		return cart.find((prod) => prod.id === id);
	};

	const deleteFromCart = (id) => {
		const newCart = cart.filter((prod) => prod.id !== id);
		setCart(newCart);
	};

	return (
		<ContextCart.Provider
			value={{ addCart, cart, getQuantity, getProdCant, deleteFromCart }}
		>
			{children}
		</ContextCart.Provider>
	);
};

export default ContextCart;
