import './App.css';
import { ItemListContainer } from './components/ItemList/ItemListContainer';
import { NavBar } from './components/NavBar/NavBar';

function App() {
	return (
		<div className="App">
			<NavBar />
			<ItemListContainer />
		</div>
	);
}

export default App;
