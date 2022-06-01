import "./App.css";
import { CardList } from './components/CardList/CardList';
// import Item from './components/Item/Item';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
// import ItemCount from './components/ItemCount/ItemCount';
import { Navbar } from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import NotFound from "./pages/NotFound";
import Mangas from "./pages/Mangas";
import Cuadros from "./pages/Cuadros";
import Funkos from "./pages/Funkos";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/nosotros" element={<Nosotros/>}/>
          <Route exact path="/productos" element={<CardList/>} />
          <Route exact path="/mangas" element={<Mangas/>} />
          <Route exact path="/cuadros" element={<Cuadros/>} />
          <Route exact path="/funkos" element={<Funkos/>} />
          <Route exact path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
      {/* <CardList/> */}
      {/* <Item/> */}
      {/* <ItemDetailContainer /> */}
    </div>
  );
}

export default App;
