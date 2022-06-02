import './App.css';
import { ItemListContainer } from './components/ItemList/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetail/ItemDetailContainer';
import { NavBar } from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route
						path="/productos"
						element={
							<ItemListContainer greeting="P R O D U C T O S" />
						}
					/>
					<Route
						path="/categoria/:categoryId"
						element={
							<ItemListContainer greeting="C A T E G O R I A" />
						}
					/>
					<Route
						path="/productos/:productId"
						element={<ItemDetailContainer />}
					/>
					<Route path="*" element={<h1>Page not found</h1>} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
