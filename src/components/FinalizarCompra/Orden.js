import React from 'react';
import { Link } from 'react-router-dom';

export const Orden = ({ compra }) => {
	return (
		<div className="animate__animated animate__fadeIn">
			<img className="img-orden" src="/MichiLogo.png" alt="" />
			<h1 className="texto-orden">Gracias por su preferencia!</h1>
			<h4 className="texto-orden">Su id de compra es: {compra}</h4>
			<Link style={{ color: '#fab43d' }} to="/productos">
				<h2>- Seguir comprando... -</h2>
			</Link>
		</div>
	);
};
