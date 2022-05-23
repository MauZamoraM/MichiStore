import './App.css';
import { ItemCount } from './components/ItemCount/ItemCount';
import { ItemListContainer } from './components/ItemList/ItemListContainer';
import { NavBar } from './components/NavBar/NavBar';

function App() {
	return (
		<div className="App">
			<NavBar />
			<ItemListContainer producto="Rascador" />
			<ItemCount />
		</div>
	);
}

export default App;
