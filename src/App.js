import './App.css';
import { ItemListContainer } from './components/ItemList/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetail/ItemDetailContainer';
import { NavBar } from './components/NavBar/NavBar';

function App() {
	return (
		<div className="App">
			<NavBar />
			<ItemListContainer />
			<ItemDetailContainer />
		</div>
	);
}

export default App;
