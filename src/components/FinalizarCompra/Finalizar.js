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

	const [compra, setCompra] = useState('');

	const [form, setForm] = useState({
		nombre: '',
		email: '',
		telefono: '',
		direccion: '',
	});

	const handleNombre = (e) => {
		setForm({
			...form,
			nombre: e.target.value,
		});
	};
	const handleEmail = (e) => {
		setForm({
			...form,
			email: e.target.value,
		});
	};
	const handleTelefono = (e) => {
		setForm({
			...form,
			telefono: e.target.value,
		});
	};
	const handleDireccion = (e) => {
		setForm({
			...form,
			direccion: e.target.value,
		});
	};

	const createOrder = () => {
		setLoading(true);
		const obj = {
			buyer: {
				form,
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
			<div className="formulario was-validated">
				<h3 className="texto-orden">C O M P R A D O R</h3>
				<br />
				<label>Nombre</label>
				<input
					className="form-control is-invalid"
					type="text"
					name="nombre"
					value={form.nombre}
					placeholder="Nombre"
					onChange={handleNombre}
					required
				></input>
				<br />
				<label>Email</label>
				<input
					className="form-control is-invalid"
					type="email"
					placeholder="Email"
					name="email"
					value={form.email}
					onChange={handleEmail}
					required
				></input>
				<br />
				<label>Telefono</label>
				<input
					className="form-control is-invalid"
					type="text"
					placeholder="Telefono"
					name="telefono"
					value={form.telefono}
					onChange={handleTelefono}
					required
				></input>
				<br />
				<label>Direccion</label>
				<input
					className="form-control is-invalid"
					type="text"
					placeholder="Direccion"
					name="direccion"
					value={form.direccion}
					onChange={handleDireccion}
					required
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
