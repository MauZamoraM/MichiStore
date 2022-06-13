import { createContext, useEffect, useState } from 'react';

const ContextCart = createContext();

export const CartContextProvider = ({ children }) => {
	const [cart, setCart] = useState([]);
	const [total, setTotal] = useState([]);

	useEffect(() => {
		getTotal();
	}, [cart]);

	const addCart = (prodAdd) => {
		if (!isInCart(prodAdd.id)) {
			setCart([...cart, prodAdd]);
		} else {
			const newCart = cart.map((prod) => {
				if (prod.id === prodAdd.id) {
					let cantidadNueva = prod.cantidad + prodAdd.cantidad;
					let newProd;
					if (cantidadNueva >= prodAdd.stock) {
						newProd = {
							...prod,
							cantidad: prodAdd.stock,
						};
					} else {
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

	const getTotal = () => {
		let total = 0;
		cart.forEach((prod) => {
			total += prod.cantidad * prod.precio;
		});
		setTotal(total);
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
			value={{
				addCart,
				cart,
				getQuantity,
				getProdCant,
				deleteFromCart,
				total,
				setCart,
			}}
		>
			{children}
		</ContextCart.Provider>
	);
};

export default ContextCart;
