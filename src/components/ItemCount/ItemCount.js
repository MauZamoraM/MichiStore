import { useState } from 'react';
import './ItemCount.css';

export const ItemCount = ({ onConfirm, stock, inicial }) => {
	const stock1 = parseInt(stock);
	const inicial1 = parseInt(inicial);

	const [contador, setContador] = useState(inicial1);

	function aumentar() {
		if (contador < stock1) {
			setContador(contador + 1);
		}
	}
	function disminuir() {
		if (contador > 0) {
			setContador(contador - 1);
		}
	}

	return (
		<div className="contenedor">
			<div className="contador">
				<div>
					<button className="boton btn-sm" onClick={disminuir}>
						-
					</button>
					<button className="boton btn-sm" onClick={aumentar}>
						+
					</button>
				</div>
				<div>
					<h6 className="numero">Cantidad: {contador}</h6>
				</div>
			</div>
			<button className="cta" onClick={() => onConfirm(contador)}>
				<span className="hover-underline-animation">
					{' '}
					Agregar al carrito{' '}
				</span>
				<svg
					id="arrow-horizontal"
					xmlns="http://www.w3.org/2000/svg"
					width="30"
					height="10"
					viewBox="0 0 46 16"
				>
					<path
						id="Path_10"
						data-name="Path 10"
						d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
						transform="translate(30)"
					></path>
				</svg>
			</button>
		</div>
	);
};
