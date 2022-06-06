import { CartWidget } from '../CartWidget/CartWidget';
import img from './Michi Store.png';
import './navbar.css';
import { Link, NavLink } from 'react-router-dom';

export function NavBar() {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container-fluid">
					<Link className="navbar-brand" to="/">
						<img className="imagen" src={img} alt="" />
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNavAltMarkup"
						aria-controls="navbarNavAltMarkup"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div
						className="collapse navbar-collapse"
						id="navbarNavAltMarkup"
					>
						<div className="navbar-nav navbar-orden">
							<Link className="nav-link" to="/productos">
								Productos
							</Link>
							<div className="dropdown">
								<button
									className="boton-nav dropdown-toggle"
									type="button"
									id="dropdownMenuButton1"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									Categorias
								</button>
								<ul
									className="dropdown-menu"
									aria-labelledby="dropdownMenuButton1"
								>
									<li>
										<NavLink
											className="dropdown-item"
											to="/categoria/Rascador"
										>
											Racador
										</NavLink>
									</li>
									<li>
										<Link
											className="dropdown-item"
											to="/categoria/Alimento"
										>
											Alimento
										</Link>
									</li>
									<li>
										<Link
											className="dropdown-item"
											to="/categoria/Juguetes y más"
										>
											Juguetes y más
										</Link>
									</li>
									<li>
										<Link
											className="dropdown-item"
											to="/categoria/Arena"
										>
											Arena
										</Link>
									</li>
								</ul>
							</div>
						</div>
						<a className="nav-link carrito mt-2" href="...">
							<CartWidget />
						</a>
						<a className="nav-link login" href="...">
							Login
						</a>
					</div>
				</div>
			</nav>
		</div>
	);
}
