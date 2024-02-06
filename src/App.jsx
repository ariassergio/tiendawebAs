
import ItemDetailContainer from './Components/ItemDetailContainer';
import ItemListContainer from './Components/ItemListContainer';
import Navbar from './Components/Navbar';
import "./main.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    
      <BrowserRouter>
        <Navbar/>

        <Routes>
          <Route path="/" element= {<ItemListContainer/>} />
          <Route path="/item/:id" element={<ItemDetailContainer/>} />
          <Route path="/productos" element= {<ItemListContainer/>}/>
          <Route path="/productos/:categorias" element= {<ItemListContainer/>} />
        </Routes>
        
      </BrowserRouter>
    
  );
}

export default App;
