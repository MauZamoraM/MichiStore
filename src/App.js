import './App.css';
import { ItemCount } from './components/ItemCount/ItemCount';
import { ItemListContainer } from './components/ItemList/ItemListContainer';
import { NavBar } from './components/NavBar/NavBar';

function App() {
	return (
		<div className="App">
			<NavBar />
			<ItemListContainer producto="Rascador" />
			<ItemCount stock="5" inicial="1" />
		</div>
	);
}

export default App;
