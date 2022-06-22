import React, { useContext, useState } from 'react';
import ContextCart from '../../context/CartContext';
import './finalizar.css';
import { Orden } from './Orden';
import { Loading } from '../Loading/Loading';
import { crateOrderProd } from '../../service/firebase/firestore';

export const Finalizar = () => {
	const { cart, total, setCart } = useContext(ContextCart);

	const [loading, setLoading] = useState(false);
	const [Navegar, setNavegar] = useState(false);

	const [nombre, setNombre] = useState('');
	const [email, setEmail] = useState('');
	const [telefono, setTelefono] = useState('');
	const [direccion, setDireccion] = useState('');
	const [compra, setCompra] = useState('');

	const handleNombre = (e) => {
		setNombre(e.target.value);
	};
	const handleEmail = (e) => {
		setEmail(e.target.value);
	};
	const handleTelefono = (e) => {
		setTelefono(e.target.value);
	};
	const handleDireccion = (e) => {
		setDireccion(e.target.value);
	};

	const createOrder = () => {
		setLoading(true);
		const obj = {
			buyer: {
				nombre,
				email,
				telefono,
				direccion,
			},
			items: cart,
			total: total,
		};

		crateOrderProd(obj, cart, setCart)
			.then((res) => {
				setCompra(res);
			})
			.catch((error) => console.log(error))
			.finally(() => {
				setLoading(false);
				setNavegar(true);
			});
	};

	if (Navegar) {
		return (
			<div>
				<Orden compra={compra} />
			</div>
		);
	}

	if (loading) {
		return <Loading />;
	}

	return (
		<div className="finalizar-container animate__animated animate__fadeIn">
			<div className="formulario">
				<h3 className="texto-orden">C O M P R A D O R</h3>
				<br />
				<label>Nombre</label>
				<input
					className="form-control"
					type="text"
					name="nombre"
					value={nombre}
					placeholder="Nombre"
					onChange={handleNombre}
				></input>
				<br />
				<label>Email</label>
				<input
					className="form-control"
					type="email"
					placeholder="Email"
					name="email"
					value={email}
					onChange={handleEmail}
				></input>
				<br />
				<label>Telefono</label>
				<input
					className="form-control"
					type="text"
					placeholder="Telefono"
					name="telefono"
					value={telefono}
					onChange={handleTelefono}
				></input>
				<br />
				<label>Direccion</label>
				<input
					className="form-control"
					type="text"
					placeholder="Direccion"
					name="direccion"
					value={direccion}
					onChange={handleDireccion}
				></input>
				<br />
				<div className="m-3 fancy" onClick={createOrder}>
					<span className="top-key"></span>
					<span className="text">Finalizar compra</span>
					<span className="bottom-key-1"></span>
					<span className="bottom-key-2"></span>
				</div>
			</div>
			<div className="detalles-pagar">
				<h3 className="texto-orden">P R O D U C T O S</h3>
				<hr />
				<div>
					{cart.map((response) => {
						return (
							<div key={response.id}>
								<p>
									{response.nombre} - ${response.precio}
								</p>
								<p>Cantidad: {response.cantidad}</p>
								<hr />
							</div>
						);
					})}
				</div>
				<h4 className="texto-orden">Total a pagar:</h4>
				<h4>${total}</h4>
			</div>
		</div>
	);
};
