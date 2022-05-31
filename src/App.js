
import './App.css';
// import { CardList } from './components/CardList/CardList';
// import Item from './components/Item/Item';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
// import ItemCount from './components/ItemCount/ItemCount';
import { Navbar } from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
          {/* <CardList/> */}
          {/* <Item/> */}
          <ItemDetailContainer/>
    </div>
  );
}

export default App;
