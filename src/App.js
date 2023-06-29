import "./App.css";
import Header from "./Componant/Header";
import { Routes,Route } from "react-router-dom";
import CardsDetail from "./Componant/CardsDetail";
import Cards from "./Componant/Cards";
function App() {
  return (
    <div className="App">
      <Header/>
     <Routes>
      <Route path="/" element={<Cards/>}/>
      <Route path="/cart" element={<CardsDetail/>}/>
      </Routes> 
     
    </div>
  );
}

export default App;
