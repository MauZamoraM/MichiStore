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
					const newProd = {
						...prod,
						cantidad: prodAdd.cantidad,
					};
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

	return (
		<ContextCart.Provider
			value={{ addCart, cart, getQuantity, getProdCant }}
		>
			{children}
		</ContextCart.Provider>
	);
};

export default ContextCart;
