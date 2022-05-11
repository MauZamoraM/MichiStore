import './navbar.css';

export function NavBar() {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container-fluid">
					<a className="navbar-brand" href="#">
						MichiStore 🐈
					</a>
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
						<div className="navbar-nav">
							<a
								className="nav-link active"
								aria-current="page"
								href="#"
							>
								Inicio
							</a>
							<a className="nav-link" href="#">
								Productos
							</a>
							<a className="nav-link" href="#">
								Adopcion
							</a>
						</div>
						<a className="nav-link login" href="#">
							Login
						</a>
					</div>
				</div>
			</nav>
		</div>
	);
}
